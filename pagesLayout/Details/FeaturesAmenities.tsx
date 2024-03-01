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
	features = [],
	nearby = [],
	other = [],
}: FeaturesAmenitiesProps) {
	const all = [...features, ...nearby];
	if (other) all.push(...other);

	return (
		<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
			<H2 smaller>Features & Amenities</H2>
			<TabContext>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList>
						<Tab label='All' />
						<Tab label='Features' />
						<Tab label='Nearby' />
						{other && <Tab label='Other' />}
					</TabList>
				</Box>
				<TabPanel index={0} list={all} />
				<TabPanel index={1} list={features} />
				<TabPanel index={2} list={nearby} />
				{other && <TabPanel index={3} list={other} />}
			</TabContext>
		</Section>
	);
}
