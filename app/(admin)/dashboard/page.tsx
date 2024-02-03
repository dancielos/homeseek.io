'use client';

import { Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { LineChart } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
	'2024-01-27',
	'2024-01-28',
	'2024-01-29',
	'2024-01-30',
	'2024-01-31',
	'2024-02-01',
	'2024-02-02',
];

export default function Dashboard() {
	return (
		<Grid container columns={10} spacing={4}>
			<Grid xs={10} sm={7}>
				<Paper elevation={3}>
					<LineChart
						// width={500}
						height={300}
						series={[
							{ data: pData, label: 'Impressions' },
							{ data: uData, label: 'Views' },
						]}
						xAxis={[{ scaleType: 'point', data: xLabels }]}
					/>
				</Paper>
			</Grid>
			<Grid xs={10} sm={3}>
				<Paper elevation={3}>Something here...</Paper>
			</Grid>
			<Grid xs={10}>
				<Paper elevation={3}>Something here...</Paper>
			</Grid>
		</Grid>
	);
}
