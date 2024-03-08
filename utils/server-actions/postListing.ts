'use server';

import { AVAILABLE_CITIES, PROPERTY_TYPE_OPTIONS } from '@/data/constants';
import validatePostalCode from '../validatePostalCode';
import validatePropertyType from '../validatePropertyType';
import validateImageFilenames from '../validateImageFilenames';
import ListingModel, { Listing, ListingInput } from '@/models/Listing';
import { getSession } from './auth';
import { PropertyType } from '@/data/types';
import { Types } from 'mongoose';
import connectDB from '../db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import delay from '../delay';
import { FileWithPreview } from '@/components/forms/admin/ListingForm';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import hashFilename from '../hashFilename';

type InputTypes = {
	[key: string]: FormDataEntryValue | string[];
	img: string[];
};

type ValidResponse = {
	success: boolean;
	invalidInputs: string[];
};

function validateInput({
	street,
	cityProvince,
	postalCode,
	propertyType,
	price,
	numBedrooms,
	numBathrooms,
	isPetFriendly,
	about,
	utilities,
	img,
	amenitiesFeatures,
	amenitiesNearby,
	amenitiesOthers,
	agreement,
}: InputTypes): ValidResponse {
	// const street = formData.get('street');
	const invalidInputs: string[] = [];
	if (agreement !== 'on' && agreement !== 'true')
		invalidInputs.push('agreement');

	// street,
	if (!street) invalidInputs.push('street');

	// cityProvince,
	// console.log(
	// 	cityProvince,
	// 	!AVAILABLE_CITIES.find((ac) => ac.label === cityProvince.toString())
	// );
	if (!AVAILABLE_CITIES.find((ac) => ac.label === cityProvince.toString()))
		invalidInputs.push('cityProvince');

	// postalCode,
	// console.log(postalCode, validatePostalCode(postalCode.toString()));
	if (!validatePostalCode(postalCode.toString()))
		invalidInputs.push('postalCode');

	// propertyType,
	// console.log(propertyType, !propertyType);
	if (!propertyType && !validatePropertyType(propertyType.toString()))
		invalidInputs.push('propertyType');

	// price,
	if (!price || !Number.isFinite(+price) || +price <= 0)
		invalidInputs.push('price');

	// numBedrooms,
	if (!numBedrooms || !Number.isFinite(+numBedrooms) || +numBedrooms <= 0)
		invalidInputs.push('numBedrooms');

	// numBathrooms,
	if (!numBathrooms || !Number.isFinite(+numBathrooms) || +numBathrooms <= 0)
		invalidInputs.push('numBathrooms');

	// isPetFriendly,
	if (!isPetFriendly) invalidInputs.push('isPetFriendly');

	// about,
	if (!about) invalidInputs.push('about');

	// img,

	if (img.length <= 0 || !validateImageFilenames(img))
		invalidInputs.push('img');

	// amenitiesFeatures,
	if (!Array.isArray(JSON.parse(amenitiesFeatures.toString())))
		invalidInputs.push('amenitiesFeatures');
	// amenitiesNearby,
	if (!Array.isArray(JSON.parse(amenitiesNearby.toString())))
		invalidInputs.push('amenitiesNearby');

	return {
		success: invalidInputs.length === 0,
		invalidInputs,
	};
}

function formatData({
	userId,
	street,
	cityProvince,
	postalCode,
	propertyType,
	price,
	numBedrooms,
	numBathrooms,
	isPetFriendly,
	about,
	utilities,
	img,
	amenitiesFeatures,
	amenitiesNearby,
	amenitiesOthers,
}: InputTypes): ListingInput {
	const { city, province } = AVAILABLE_CITIES.find(
		(ac) => ac.label === cityProvince.toString()
	)?.value as { city: string; province: string };

	return {
		userId: new Types.ObjectId(userId.toString()),
		date: new Date(Date.now()),
		address: {
			street: '' + street,
			city,
			province,
			postalCode: '' + postalCode,
		},
		price: +price,
		numBathrooms: +numBathrooms,
		numBedrooms: +numBedrooms,
		isPetFriendly: isPetFriendly.toString().toLowerCase() === 'yes',
		img,
		propertyType: ('' + propertyType) as PropertyType,
		about: '' + about,
		amenities: {
			features: JSON.parse(amenitiesFeatures.toString()),
			nearby: JSON.parse(amenitiesNearby.toString()),
			other: amenitiesOthers.toString().split(','),
		},
		utilitiesIncluded: utilities.toString().split(','),
	};
}

async function uploadToS3(
	images: Array<File>,
	filenames: string[]
): Promise<boolean> {
	if (images.length !== filenames.length) return false;

	const client = new S3Client({
		region: process.env.BUCKET_REGION,
	});

	const commands = images
		.filter((image) => image !== null)
		.map(async (image, i) => {
			const fileData = await image!.arrayBuffer();
			return client.send(
				new PutObjectCommand({
					Bucket: process.env.BUCKET_NAME,
					Key: filenames[i],
					Body: Buffer.from(fileData),
				})
			);
		});

	const responses = await Promise.all(commands);

	return responses.every(
		(response) => response['$metadata'].httpStatusCode === 200
	);
}

export type FormResponse =
	| {
			success: boolean;
			message: string;
			invalidInput: string[];
			id: string;
	  }
	| null
	| undefined;

export async function postListing(
	// files: FileWithPreview[]
	// prevState: FormResponse,
	formData: FormData
): Promise<FormResponse> {
	const session = await getSession();

	if (!session || session.role > 1) {
		return {
			success: false,
			message: 'You are not authorized. Please sign in again. ',
			invalidInput: [],
			id: '',
		};
	}

	const {
		street,
		cityProvince,
		postalCode,
		propertyType,
		price,
		numBedrooms,
		numBathrooms,
		isPetFriendly,
		about,
		utilities,
		// img,
		amenitiesFeatures,
		amenitiesNearby,
		amenitiesOthers,
		agreement,
	} = Object.fromEntries(formData.entries());

	const images: Array<File> = [0, 1, 2, 3, 4]
		.map((i) => {
			return formData.get(`img[${i}]`) as File;
		})
		.filter((image) => image !== null);

	const filenames = images.map((image, i) => {
		return `tmp/${hashFilename(image.name, i)}`;
	});

	const isValid = validateInput({
		img: filenames,
		street,
		cityProvince,
		postalCode,
		propertyType,
		price,
		numBedrooms,
		numBathrooms,
		isPetFriendly,
		about,
		utilities,
		amenitiesFeatures,
		amenitiesNearby,
		amenitiesOthers,
		agreement,
	});

	if (!isValid.success) {
		return {
			success: isValid.success,
			message: 'There are some invalid field(s). Please try again.',
			invalidInput: isValid.invalidInputs,
			id: '',
		};
	}

	const formattedData = formatData({
		userId: session.user.id,
		street,
		cityProvince,
		postalCode,
		propertyType,
		price,
		numBedrooms,
		numBathrooms,
		isPetFriendly,
		about,
		utilities,
		img: filenames,
		amenitiesFeatures,
		amenitiesNearby,
		amenitiesOthers,
	});

	try {
		await connectDB();

		const s3Response = await uploadToS3(images, filenames);
		if (!s3Response) throw Error('Failed to upload images.');

		const newListing = await ListingModel.create(formattedData);

		return {
			success: true,
			message: '',
			invalidInput: isValid.invalidInputs,
			id: newListing._id.toString(),
			// id: 'newListing._id.toString()',
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: `Something went wrong: ${error}`,
			invalidInput: isValid.invalidInputs,
			id: '',
		};
	}
}
