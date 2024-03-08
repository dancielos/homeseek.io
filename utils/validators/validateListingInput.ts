import { AVAILABLE_CITIES } from '@/data/constants';
import { InputTypes, ValidResponse } from '@/data/types';
import validatePostalCode from './validatePostalCode';
import validatePropertyType from './validatePropertyType';
import validateImageFilenames from './validateImageFilenames';

export function validateListingInput({
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
