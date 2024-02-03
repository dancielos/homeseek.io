'use client';

import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { LineChart } from '@mui/x-charts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
					<Stack flexDirection='row' justifyContent='space-between'>
						<Container
							sx={{
								m: 0,
								flexBasis: {
									xs: '100%',
									sm: 'auto',
								},
								px: {
									xs: 1,
									sm: 2,
								},
							}}
						>
							<Typography variant='body2'>Total Views</Typography>
							<Typography variant='h4'>1,250</Typography>
						</Container>

						<Button
							variant='subtle'
							endIcon={<ArrowDropDownIcon />}
							sx={{
								minWidth: {
									xs: 0.24,
									sm: 0.16,
								},
								alignSelf: 'flex-start',
								px: {
									xs: 3,
									xm: 2,
									sm: 3,
									md: 0,
								},
							}}
						>
							Month
						</Button>
					</Stack>
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
