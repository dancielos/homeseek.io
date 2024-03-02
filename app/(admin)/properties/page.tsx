import Box from '@mui/material/Box';
import getListingsForAdmin from '@/utils/server-actions/getListingsForAdmin';
import PropertiesData from '@/pagesLayout/Properties/PropertiesData';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Properties() {
	const listings = await getListingsForAdmin();

	return (
		<>
			<Box sx={{ overflow: 'auto', minHeight: '80vh' }}>
				<Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
					<PropertiesData rows={listings} />
				</Box>
			</Box>
		</>
	);
}
