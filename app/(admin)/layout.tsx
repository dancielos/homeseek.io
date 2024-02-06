import { ReactNode } from 'react';

import Box from '@mui/material/Box';

import AdminAppBar from '@/layouts/admin/AdminAppBar';
import AdminDrawer from '@/layouts/admin/AdminDrawer';
import { Button, Stack, TextField } from '@mui/material';
import H1 from '@/components/htmlElements/H1';
import Grid from '@mui/material/Unstable_Grid2';
import CTA from '@/components/client/CTA';

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
					{children}
				</Box>
			</Box>
		</>
	);
}
