'use server';

import formatNumber from '@/utils/formatters/formatNumber';
import getListingsCount from '@/utils/server-actions/getListingsCount';
import { Typography } from '@mui/material';

export default async function ActiveListingsCount() {
	const count = await getListingsCount();
	const formattedCount = formatNumber(count);
	return (
		<Typography component='p' variant='h3'>
			{formattedCount}
		</Typography>
	);
}
