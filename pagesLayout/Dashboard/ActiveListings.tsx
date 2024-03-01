import CTA from '@/components/client/CTA';
import { Paper, Typography } from '@mui/material';

export default function ActiveListings() {
	const today = new Intl.DateTimeFormat('en-CA', {
		dateStyle: 'full',
	}).format(Date.now());
	return (
		<Paper
			elevation={3}
			// sx={{
			// 	height: '100%',
			// }}
		>
			<Typography variant='body2'># of Active Listings</Typography>
			<Typography component='p' variant='h3'>
				120
			</Typography>
			<Typography color='text.secondary' sx={{ flex: 1 }}>
				on {today}
			</Typography>
			<CTA
				color='secondary'
				href='/properties'
				id='dashboard-manage-properties'
			>
				Manage Properties
			</CTA>
		</Paper>
	);
}
