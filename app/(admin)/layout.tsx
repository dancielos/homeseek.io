import { ReactNode, Suspense } from 'react';

import Box from '@mui/material/Box';

import AdminAppBar from '@/layouts/admin/AdminAppBar';
import AdminDrawer from '@/layouts/admin/AdminDrawer';

import PageTitle from '@/components/client/admin/PageTitle';
import ThemeRegistry from '@/data/theme/themeRegistry';
import { redirect } from 'next/navigation';
import { getSession } from '@/utils/server-actions/auth';
import H3 from '@/components/htmlElements/H3';

export default async function AdminLayout({
	children,
}: {
	children: ReactNode;
}) {
	const session = await getSession();
	if (!session) redirect('/login');
	return (
		<ThemeRegistry options={{ key: 'mui-theme' }}>
			<Box sx={{ display: 'flex' }}>
				<AdminAppBar />
				<AdminDrawer />
				<Box
					component='main'
					sx={{ flexGrow: 1, p: 3, pt: { xs: 10, sm: 12 } }}
				>
					<Suspense>
						<PageTitle title={session ? `Welcome ${session.user.name}` : ''} />
					</Suspense>
					<Suspense>{children}</Suspense>
				</Box>
			</Box>
		</ThemeRegistry>
	);
}
