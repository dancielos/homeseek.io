import TabContext from '@/components/client/TabContext';
import TabList from '@/components/client/TabList';
import H2 from '@/components/htmlElements/H2';
import Section from '@/components/section/Section';
import { TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';

export default function FeaturesAmenities() {
	return (
		<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
			<H2 smaller>Features & Amenities</H2>
			<TabContext>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList>
						<Tab label='All' value='1' />
						<Tab label='Features' value='2' />
						<Tab label='Nearby' value='3' />
						<Tab label='Other' value='4' />
					</TabList>
				</Box>
				<TabPanel value='1'>Item One</TabPanel>
				<TabPanel value='2'>Item Two</TabPanel>
				<TabPanel value='3'>Item Three</TabPanel>
				<TabPanel value='4'>Others</TabPanel>
			</TabContext>
		</Section>
	);
}
