import { ReactNode } from 'react';

import Box from '@mui/material/Box';

import AdminAppBar from '@/layouts/admin/AdminAppBar';
import AdminDrawer from '@/layouts/admin/AdminDrawer';
import { Stack } from '@mui/material';
import H1 from '@/components/htmlElements/H1';
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
					<Stack
						flexDirection='row'
						alignItems='center'
						justifyContent='space-between'
						mb={2}
					>
						<H1
							sx={{
								pb: 0,
								letterSpacing: 1,
								fontSize: {
									xs: '1.2rem',
									md: '1.6rem',
								},
								textAlign: 'left',
							}}
						>
							Properties
						</H1>
						<CTA>Add new Property</CTA>
					</Stack>
					{children}
				</Box>
			</Box>
		</>
	);
}
