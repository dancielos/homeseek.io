import CTA from '@/components/client/CTA';
import { Paper, Typography } from '@mui/material';
import { Suspense } from 'react';
import ActiveListingsCount from './ActiveListingsCount';

export default function ActiveListings({ date }: { date: string }) {
	return (
		<Paper
			elevation={3}
			// sx={{
			// 	height: '100%',
			// }}
		>
			<Typography variant='body2'># of Active Listings</Typography>
			<Suspense
				fallback={
					<Typography component='p' variant='h3'>
						{' '}
					</Typography>
				}
			>
				<ActiveListingsCount />
			</Suspense>
			<Typography color='text.secondary' sx={{ flex: 1 }}>
				on {date}
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
