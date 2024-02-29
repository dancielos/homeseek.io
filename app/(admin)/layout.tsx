import { ReactNode, Suspense, useEffect } from 'react';

import Box from '@mui/material/Box';

import AdminAppBar from '@/layouts/admin/AdminAppBar';
import AdminDrawer from '@/layouts/admin/AdminDrawer';

import PageTitle from '@/components/client/admin/PageTitle';
import ThemeRegistry from '@/data/theme/themeRegistry';
import { redirect } from 'next/navigation';
import { getSession } from '@/utils/server-actions/auth';
import { ScopedCssBaseline } from '@mui/material';

import './admin.css';

export default async function AdminLayout({
	children,
}: {
	children: ReactNode;
}) {
	const session = await getSession();
	if (!session) redirect('/login');

	return (
		<ThemeRegistry options={{ key: 'mui-theme' }}>
			<ScopedCssBaseline>
				<Box sx={{ display: 'flex' }}>
					<AdminAppBar />
					<AdminDrawer />
					<Box
						component='main'
						sx={{
							flexGrow: 1,
							px: 3,
							pt: { xs: 10, sm: 12 },
							position: 'relative',
							display: 'block',
						}}
					>
						<Suspense>
							<PageTitle
								title={session ? `Welcome ${session.user.name}` : ''}
							/>
						</Suspense>
						<Suspense>{children}</Suspense>
					</Box>
				</Box>
			</ScopedCssBaseline>
		</ThemeRegistry>
	);
}
