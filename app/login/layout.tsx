// import Footer from '@/layouts/Footer';
import ThemeRegistry from '@/data/theme/themeRegistry';
import NavBar from '@/layouts/NavBar';
import { getSession } from '@/utils/server-actions/auth';
import { Box } from '@mui/material';
import { redirect } from 'next/navigation';

import { ReactNode } from 'react';

export default async function RentalsLayout({
	children,
}: {
	children: ReactNode;
}) {
	const session = await getSession();
	if (session) redirect('/dashboard');
	return (
		<ThemeRegistry options={{ key: 'mui-theme' }} lightModeOnly>
			<Box>
				<NavBar />
				<main>{children}</main>
			</Box>
		</ThemeRegistry>
	);
}
