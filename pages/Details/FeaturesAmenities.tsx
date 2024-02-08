import TabContext from '@/components/client/TabContext';
import TabList from '@/components/client/TabList';
import H2 from '@/components/htmlElements/H2';
import Section from '@/components/section/Section';
import TabPanel from '@/components/ui/TabPanel';
import { Box, Tab } from '@mui/material';

type FeaturesAmenitiesProps = {
	features: string[];
	nearby: string[];
	other?: string[] | null;
};

export default function FeaturesAmenities({
	features,
	nearby,
	other,
}: FeaturesAmenitiesProps) {
	return (
		<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
			<H2 smaller>Features & Amenities</H2>
			<TabContext>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList>
						<Tab label='All' value='1' />
						<Tab label='Features' value='2' />
						<Tab label='Nearby' value='3' />
						{other && <Tab label='Other' value='4' />}
					</TabList>
				</Box>
				<TabPanel value='1' list={[]} />
				<TabPanel value='2' list={features} />
				<TabPanel value='3' list={nearby} />

				{other && <TabPanel value='4' list={other} />}
			</TabContext>
		</Section>
	);
}
