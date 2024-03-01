import {
	Box,
	Paper,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import RecentListingsData from './RecentListingsData';
import { Suspense } from 'react';
import RecentListingsLoading from './RecentListingsLoading';

export default function RecentListings() {
	return (
		<Paper
			elevation={3}

			// sx={{
			// 	whiteSpace: 'nowrap',
			// 	overflow: 'auto',
			// 	width: '100%',
			// 	display: 'block',
			// }}
		>
			<Box sx={{ overflow: 'auto' }}>
				<Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
					<Table size='small' aria-label='a dense table'>
						<TableHead>
							<TableRow>
								<TableCell>Listing Address</TableCell>
								<TableCell align='right'>Property Type</TableCell>
								<TableCell align='right'>Price</TableCell>
								<TableCell align='right'>Bedrooms</TableCell>
								<TableCell align='right'>Bathrooms</TableCell>
								<TableCell align='right'>Date Listed</TableCell>
							</TableRow>
						</TableHead>
						<Suspense
							fallback={
								<TableBody>
									{[1, 2, 3].map((_, i) => (
										<RecentListingsLoading colCount={6} key={i} />
									))}
								</TableBody>
							}
						>
							<RecentListingsData />
						</Suspense>
					</Table>
				</Box>
			</Box>
		</Paper>
	);
}
