import Box from '@mui/material/Box';
import getListingsForAdmin from '@/utils/server-actions/getListingsForAdmin';
import PropertiesData from '@/pagesLayout/Properties/PropertiesData';
import { getSession } from '@/utils/server-actions/auth';

export default async function Properties() {
	const listings = await getListingsForAdmin();
	const session = await getSession();
	const isSuperAdmin = session?.user.role === 0;
	return (
		<>
			<Box sx={{ overflow: 'auto', minHeight: '80vh' }}>
				<Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
					<PropertiesData
						rows={listings}
						userId={session?.user.id ?? ''}
						isSuperAdmin={isSuperAdmin}
					/>
				</Box>
			</Box>
		</>
	);
}
