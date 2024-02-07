// import Footer from '@/layouts/Footer';
import ThemeRegistry from '@/data/theme/themeRegistry';
import NavBar from '@/layouts/NavBar';
import { Box } from '@mui/material';

import { ReactNode } from 'react';

export default function RentalsLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeRegistry options={{ key: 'mui-theme' }} lightModeOnly>
			<Box
			// sx={{
			// 	maxHeight: '100vh',
			// 	overflowY: 'auto',
			// }}
			>
				<NavBar />
				<main>{children}</main>
			</Box>
		</ThemeRegistry>
	);
}
