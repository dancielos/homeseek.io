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
					<Grid
						container
						columns={10}
						// gap={2}
						mb={2}
						spacing={2}
					>
						<Grid xs={10} sm={5} display='flex' alignItems='center' gap={2}>
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
						</Grid>
						<Grid xs={10} sm={5} display='flex' justifyContent='flex-end'>
							<TextField
								size='small'
								variant='outlined'
								type='search'
								label='Search Property'
							/>
							<Button variant='subtle'>Search</Button>
						</Grid>
					</Grid>
					{children}
				</Box>
			</Box>
		</>
	);
}
