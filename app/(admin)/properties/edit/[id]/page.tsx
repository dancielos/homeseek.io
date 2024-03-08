import ListingForm from '@/components/forms/admin/ListingForm';
import ListingModel from '@/models/Listing';
import connectDB from '@/utils/db';

import { redirect } from 'next/navigation';
import { isValidObjectId } from 'mongoose';

export default async function EditProperty({
	params = { id: '' },
}: {
	params: { id: string };
}) {
	const isValid = isValidObjectId(params.id);
	if (!isValid) redirect('/properties');

	await connectDB();

	const listing = await ListingModel.findById(params.id);
	const data = {
		id: params.id,
		street: listing.street,
		// cityProvince: ,
		postalCode: listing.postalCode,
		propertyType: listing.propertyType,
		price: listing.price,
		numBedrooms: listing.numBedrooms,
		numBathrooms: listing.numBathrooms,
		isPetFriendly: listing.isPetFriendly ? 'yes' : 'no',
		about: listing.about,
		utilities: listing.utilities.join(', '),
		// img:
		amenitiesFeatures: listing.amenitiesFeatures,
		amenitiesNearby: listing.amenitiesNearby,
		amenitiesOthers: listing.amenitiesOthers,
	};
	console.log(data);
	return (
		<>
			<ListingForm id='new-property-form' action='edit' />
		</>
	);
}
