'use client';

import { ReactNode, useState } from 'react';

import Box from '@mui/material/Box';

import AdminAppBar from '@/layouts/admin/AdminAppBar';
import AdminDrawer from '@/layouts/admin/AdminDrawer';

export default function AdminLayout({ children }: { children: ReactNode }) {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<AdminAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
				<AdminDrawer open={open} handleDrawerClose={handleDrawerClose} />
				<Box component='main' sx={{ flexGrow: 1, p: 3, pt: 8 }}>
					{children}
				</Box>
			</Box>
		</>
	);
}
