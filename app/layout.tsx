// 'use client';
// import CustomTheme from '@/utils/theme';
import ThemeRegistry from '@/utils/themeRegistry';
import { ThemeProvider } from '@emotion/react';
// import { createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
// import { defaultTheme } from '@/utils/theme';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';
const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<AppRouterCacheProvider>
					<ThemeRegistry options={{ key: 'mui-theme' }}>
						{children}
					</ThemeRegistry>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
