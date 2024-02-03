import { ReactNode } from 'react';

import Box from '@mui/material/Box';

import AdminAppBar from '@/layouts/admin/AdminAppBar';
import AdminDrawer from '@/layouts/admin/AdminDrawer';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<AdminAppBar />
				<AdminDrawer />
				<Box component='main' sx={{ flexGrow: 1, p: 3, pt: { xs: 7, sm: 8 } }}>
					{children}
				</Box>
			</Box>
		</>
	);
}
