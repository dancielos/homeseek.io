// 'use client';
// import CustomTheme from '@/utils/theme';
import Footer from '@/layouts/Footer';
import NavBar from '@/layouts/NavBar';
import ThemeRegistry from '@/utils/themeRegistry';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
// import { createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
// import { defaultTheme } from '@/utils/theme';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Hello World!',
	description: 'Home Seek starter...',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<AppRouterCacheProvider>
					<ThemeRegistry options={{ key: 'mui-theme' }}>
						<CssBaseline />
						<NavBar />
						<main>{children}</main>
						<Footer />
					</ThemeRegistry>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
