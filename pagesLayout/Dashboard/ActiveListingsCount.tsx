'use server';

import getListingsCount from '@/utils/server-actions/getListingsCount';
import { Typography } from '@mui/material';

export default async function ActiveListingsCount() {
	const count = await getListingsCount();
	return (
		<Typography component='p' variant='h3'>
			{count}
		</Typography>
	);
}
