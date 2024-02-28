import ThemeRegistry from '@/data/theme/themeRegistry';
import Footer from '@/layouts/Footer';
import NavBar from '@/layouts/NavBar';

import { ReactNode, Suspense } from 'react';

export default function RentalsLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeRegistry options={{ key: 'mui-theme' }} lightModeOnly>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</ThemeRegistry>
	);
}
