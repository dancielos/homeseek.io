import { ArrowBackOutlined } from '@mui/icons-material';
import { Chip, Container, IconButton, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import H1 from '@/components/htmlElements/H1';
import StickyBar from '@/components/ui/StickyBar';
import H2 from '@/components/htmlElements/H2';

import P from '@/components/htmlElements/P';
import Map from '@/components/core/Map';
import CTA from '@/components/ui/CTA';
import ImageSlider from '@/components/ui/ImageSlider';
import BasicDetails from '@/pages/Details/BasicDetails';
import FeaturesAmenities from '@/pages/Details/FeaturesAmentities';
import UtilitiesIncluded from '@/pages/Details/UtilitiesIncluded';
import About from '@/pages/Details/About';
import TitleBar from '@/pages/Details/TitleBar';
import ListingContactForm from '@/components/forms/ListingContactForm';

export default function Details() {
	return (
		<>
			<TitleBar />
			<Container
				sx={{
					pt: 4,
					pb: 12,
				}}
			>
				<Grid container columns={10} columnSpacing={2}>
					<Grid xm={10} sm={6}>
						<Stack spacing={4}>
							<ImageSlider />
							<BasicDetails />
							<FeaturesAmenities />
							<UtilitiesIncluded />
							<About />
							<Map />
						</Stack>
					</Grid>
					<Grid xm={10} sm={4}>
						<ListingContactForm />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
