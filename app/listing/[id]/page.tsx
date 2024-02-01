import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Map from '@/components/core/Map';
import ImageSlider from '@/components/ui/ImageSlider';
import BasicDetails from '@/pages/Details/BasicDetails';
import FeaturesAmenities from '@/pages/Details/FeaturesAmentities';
import UtilitiesIncluded from '@/pages/Details/UtilitiesIncluded';
import About from '@/pages/Details/About';
import ListingContactForm from '@/components/forms/ListingContactForm';

// IMPORTANT :
// This page is wrapped in a Grid container,
// so the 'root' element for this component should be
// a <Grid> -> item

export default function Details() {
	return (
		<>
			<Grid xm={10} sm={5} md={6}>
				<Stack spacing={4}>
					<ImageSlider />
					<BasicDetails />
					<FeaturesAmenities />
					<UtilitiesIncluded />
					<About />
					<Map />
				</Stack>
			</Grid>
			<Grid xm={10} sm={5} md={4}>
				<ListingContactForm />
			</Grid>
		</>
	);
}
