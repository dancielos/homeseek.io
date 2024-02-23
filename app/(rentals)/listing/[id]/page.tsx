import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Map from '@/components/client/Map';
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
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import { PROPERTY_TYPE, PropertyType } from '@/data/types';

// IMPORTANT :
// This page is wrapped in a Grid container,
// so the 'root' element for this component should be
// a <Grid> -> item

export default async function Details() {
	const connected = await connectDB();

	console.log('from listing/[id]/page.tsx ' + connected);
	// const listing = await ListingModel.findById('65c571c8fbbb710a915839a7');
	// // console.log(listing.address);
	// const address = formatAddress(
	// 	listing.address.street,
	// 	listing.address.city,
	// 	listing.address.province,
	// 	listing.address.postalCode
	// );
	const listing = {
		img: ['test'],
		price: 0,
		amenities: {
			features: [],
			nearby: [],
			other: [],
		},
		about: 'Lorem ipsum',
		utilitiesIncluded: [],
		numBedrooms: 1,
		numBathrooms: 2,
		propertyType: 'HOUSE' as PropertyType,
		isPetFriendly: true,
	};
	const address = 'dummy';

	const images = listing.img.map((image: string, i: number) => {
		return { src: `${process.env.S3_URL}/${image}`, alt: `address ${i}` };
	});

	const price = formatPrice(listing.price);
	return (
		<>
			<Grid xm={10} sm={5} md={6}>
				<Stack spacing={4}>
					<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
						<ImageSlider images={images} />
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
