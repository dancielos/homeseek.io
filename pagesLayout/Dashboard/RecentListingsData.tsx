import { PROPERTY_TYPE, PropertyType } from '@/data/types';
import formatDate from '@/utils/formatDate';
import formatPrice from '@/utils/formatPrice';
import getRecentListings from '@/utils/server-actions/getRecentListings';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import Link from 'next/link';
import ListingLink from '../../components/ui/admin/ListingLink';

export default async function RecentListingsData() {
	const recentListings = await getRecentListings(7);

	return (
		<TableBody>
			{recentListings.map((row) => (
				<TableRow
					key={row.address}
					sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
					<TableCell
						component='th'
						scope='row'
						sx={{
							minWidth: {
								xs: '50vw',
								// xm: '40vw',
								sm: '40vw',
								md: 'auto',
							},
						}}
					>
						<ListingLink text={row.address} id={row.id} />
					</TableCell>
					<TableCell align='right'>
						{PROPERTY_TYPE[row.propertyType as PropertyType]}
					</TableCell>
					<TableCell align='right'>{formatPrice(row.price)}</TableCell>
					<TableCell align='right'>{row.numBedrooms}</TableCell>
					<TableCell align='right'>{row.numBathrooms}</TableCell>
					<TableCell align='right'>{formatDate(row.date, 'long')}</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
}
