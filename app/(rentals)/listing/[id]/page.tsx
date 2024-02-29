import { Container, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Map from '@/components/client/Map';
import BasicDetails from '@/pages/Details/BasicDetails';
import FeaturesAmenities from '@/pages/Details/FeaturesAmenities';
import UtilitiesIncluded from '@/pages/Details/UtilitiesIncluded';
import About from '@/pages/Details/About';
import ListingContactForm from '@/components/forms/contact/ListingContactForm';
import Section from '@/components/section/Section';
import connectDB from '@/utils/db';
import ListingModel from '@/models/Listing';
import formatAddress from '@/utils/formatAddress';
import formatPrice from '@/utils/formatPrice';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import TitleBar from '@/pages/Details/TitleBar';
import getCoordsFromCity from '@/utils/server-actions/getCoordsFromCity';
import getPin from '@/utils/server-actions/getPin';

export default async function Details({
	params = { id: '' },
}: {
	params: { id: string };
}) {
	await connectDB();
	const listing = await ListingModel.findById(params.id);
	// console.log(listing.address);
	const address = formatAddress(
		listing.address.street,
		listing.address.city,
		listing.address.province,
		listing.address.postalCode
	);

	const coords = await getCoordsFromCity(listing.address.city);
	const pin = await getPin(address, { lat: coords.lat, lng: coords.lng });

	const images = listing.img.map((image: string, i: number) => {
		return { src: `${process.env.S3_URL}/${image}`, alt: `address ${i}` };
	});

	const price = formatPrice(listing.price);
	return (
		<>
			<TitleBar title={listing.address.street} />
			<Container
				sx={{
					pt: 4,
					pb: 12,
				}}
			>
				<Grid container columns={10} columnSpacing={2} rowSpacing={6}>
					<Grid xm={10} sm={5} md={6}>
						<Stack spacing={4}>
							<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
								<ImageSlider
									images={images}
									customHeight={480}
									autoHeight={false}
								/>
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
							<div style={{ height: '480px' }}>
								<Map coordinates={coords} pin={pin} />
							</div>
						</Stack>
					</Grid>
					<Grid xm={10} sm={5} md={4}>
						<ListingContactForm />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
