'use client';

import H2 from '@/components/htmlElements/H2';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useState } from 'react';

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function FeaturesAmenities() {
	const [value, setValue] = useState('1');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<>
			<H2>Features & Amenities</H2>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange} aria-label='lab API tabs example'>
						<Tab label='All' value='1' />
						<Tab label='Features' value='2' />
						<Tab label='Nearby' value='3' />
						<Tab label='Other' value='4' />
					</TabList>
				</Box>
				<TabPanel value='1'>Item One</TabPanel>
				<TabPanel value='2'>Item Two</TabPanel>
				<TabPanel value='3'>Item Three</TabPanel>
				<TabPanel value='4'>Item Three</TabPanel>
			</TabContext>
		</>
	);
}
