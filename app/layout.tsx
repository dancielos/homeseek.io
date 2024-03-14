import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css';

import type { Metadata } from 'next';
import { ReduxProvider } from '@/data/provider';
import ThemeRegistry from '@/data/theme/themeRegistry';
import { CircularProgress, CssBaseline } from '@mui/material';
import { Suspense } from 'react';
import Loading from './(rentals)/loading';

export const metadata: Metadata = {
	title: 'Home Seek',
	description: 'Home Seek starter...',
};

type rootProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<rootProps>) {
	return (
		<html lang='en'>
			<ReduxProvider>
				<CssBaseline />
				<body>
					<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
				</body>
			</ReduxProvider>
		</html>
	);
}
