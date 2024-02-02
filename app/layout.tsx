import Footer from '@/layouts/Footer';
import NavBar from '@/layouts/NavBar';
import ThemeRegistry from '@/utils/themeRegistry';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css';

import type { Metadata } from 'next';

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
			<body>
				<AppRouterCacheProvider>
					<ThemeRegistry options={{ key: 'mui-theme' }}>
						<CssBaseline />
						{children}
					</ThemeRegistry>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
