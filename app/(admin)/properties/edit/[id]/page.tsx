import ListingForm from '@/components/forms/admin/ListingForm';
import ListingModel from '@/models/Listing';
import connectDB from '@/utils/db';

import { redirect } from 'next/navigation';
import { isValidObjectId } from 'mongoose';
import { getSession } from '@/utils/server-actions/auth';

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

	const data = {
		id: params.id,
		// street: listing.street,
		// // cityProvince: ,
		// postalCode: listing.postalCode,
		// propertyType: listing.propertyType,
		// price: listing.price,
		// numBedrooms: listing.numBedrooms,
		// numBathrooms: listing.numBathrooms,
		// isPetFriendly: listing.isPetFriendly ? 'yes' : 'no',
		// about: listing.about,
		// utilities: listing.utilities.join(', '),
		// // img:
		// amenitiesFeatures: listing.amenitiesFeatures,
		// amenitiesNearby: listing.amenitiesNearby,
		// amenitiesOthers: listing.amenitiesOthers,
	};
	console.log(data);
	return (
		<>
			<ListingForm id='new-property-form' action='edit' />
		</>
	);
}
