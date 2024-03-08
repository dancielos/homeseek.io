import ListingForm, { InputData } from '@/components/forms/admin/ListingForm';
import ListingModel from '@/models/Listing';
import connectDB from '@/utils/db';

import { redirect } from 'next/navigation';
import { isValidObjectId } from 'mongoose';
import { getSession } from '@/utils/server-actions/auth';
import { AVAILABLE_CITIES } from '@/data/constants';
import { ListingSelectOptions } from '@/data/types';

export default async function EditProperty({
	params = { id: '' },
}: {
	params: { id: string };
}) {
	const session = await getSession();
	if (!session) redirect('/login');

	const isSuperAdmin = session.user.role === 0;

	const isValid = isValidObjectId(params.id);
	if (!isValid) redirect('/properties');

	await connectDB();

	const listing = await ListingModel.findById(params.id);

	if (listing.userId.toString() !== session.user.id && !isSuperAdmin) {
		redirect('/properties');
	}

	const data: InputData = {
		id: params.id,
		street: listing.address.street,
		cityProvince: AVAILABLE_CITIES.find((ac) => {
			if (
				typeof ac.value === 'object' &&
				ac.value.city === listing.address.city &&
				ac.value.province === listing.address.province
			)
				return ac.label;
		})!, // it will never be undefined
		postalCode: listing.address.postalCode,
		propertyType: listing.propertyType,
		price: listing.price,
		numBedrooms: listing.numBedrooms,
		numBathrooms: listing.numBathrooms,
		isPetFriendly: listing.isPetFriendly ? 'yes' : 'no',
		about: listing.about,
		utilities: listing.utilitiesIncluded,
		// img:
		amenitiesFeatures: listing.amenities.features,
		amenitiesNearby: listing.amenities.nearby,
		amenitiesOthers: listing.amenities.others?.join(', ') ?? '',
	};
	console.log(data);
	return (
		<>
			<ListingForm id='new-property-form' action='edit' data={data} />
		</>
	);
}
