import { Paper, Typography } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';

import ActiveListings from '@/pagesLayout/Dashboard/ActiveListings';
import ViewsReport from '@/pagesLayout/Dashboard/ViewsReport';
import formatDate from '@/utils/formatDate';
import RecentListings from '@/pagesLayout/Dashboard/RecentListings';

export default function Dashboard() {
	const today = formatDate(Date.now(), 'full');
	return (
		<Grid container columns={10} spacing={4}>
			<Grid xs={10} md={7}>
				<ViewsReport />
			</Grid>
			<Grid xs={10} md={3}>
				<Grid
					container
					columns={10}
					flexDirection={{ xs: 'column', sm: 'row', md: 'column' }}
					spacing={2}
				>
					<Grid xs={10} sm={5} md={10}>
						<ActiveListings date={today} />
					</Grid>
					<Grid xs={10} sm={5} md={10}>
						<Paper
							elevation={3}

							// sx={{
							// 	height: '100%',
							// }}
						>
							<Typography variant='body2'># of Closed Listings</Typography>
							<Typography component='p' variant='h3'>
								120
							</Typography>
							<Typography color='text.secondary' sx={{ flex: 1 }}>
								on {today}
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
			<Grid xs={10}>
				<RecentListings />
			</Grid>
		</Grid>
	);
}
