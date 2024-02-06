import { ReactNode } from 'react';

import Box from '@mui/material/Box';

import AdminAppBar from '@/layouts/admin/AdminAppBar';
import AdminDrawer from '@/layouts/admin/AdminDrawer';

import PageTitle from '@/components/client/admin/PageTitle';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<AdminAppBar />
				<AdminDrawer />
				<Box
					component='main'
					sx={{ flexGrow: 1, p: 3, pt: { xs: 10, sm: 12 } }}
				>
					<PageTitle />
					{children}
				</Box>
			</Box>
		</>
	);
}
