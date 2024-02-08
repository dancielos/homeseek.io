import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Map from '@/components/client/Map';
import ImageSlider from '@/components/ui/ImageSlider';
import BasicDetails from '@/pages/Details/BasicDetails';
import FeaturesAmenities from '@/pages/Details/FeaturesAmenities';
import UtilitiesIncluded from '@/pages/Details/UtilitiesIncluded';
import About from '@/pages/Details/About';
import ListingContactForm from '@/components/forms/ListingContactForm';
import Section from '@/components/section/Section';
import connectDB from '@/utils/db';
import ListingModel from '@/models/Listing';
import formatAddress from '@/utils/formatAddress';
import formatPrice from '@/utils/formatPrice';

// IMPORTANT :
// This page is wrapped in a Grid container,
// so the 'root' element for this component should be
// a <Grid> -> item

export default async function Details() {
	// await connectDB();
	const listing = await ListingModel.findOne();
	// console.log({ listing });
	const address = formatAddress(
		listing.street,
		listing.city,
		listing.province,
		listing.postalCode
	);
	const price = formatPrice(listing.price);
	return (
		<>
			<Grid xm={10} sm={5} md={6}>
				<Stack spacing={4}>
					<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
						<ImageSlider images={listing.img} />
						<BasicDetails
							address={address}
							price={price}
							bedrooms={listing.numBedrooms}
							bathrooms={listing.numBathrooms}
							propertyType={listing.propertyType}
							isPetFriendly={listing.isPetFriendly}
						/>
					</Section>
					<FeaturesAmenities
						features={listing.amenities.features}
						nearby={listing.amenities.nearby}
						other={listing.amenities.other}
					/>
					{/* <UtilitiesIncluded /> */}
					<UtilitiesIncluded utilities={listing.utilitiesIncluded} />
					<About text={listing.about} />
					<Map />
				</Stack>
			</Grid>
			<Grid xm={10} sm={5} md={4}>
				<ListingContactForm />
			</Grid>
		</>
	);
}
