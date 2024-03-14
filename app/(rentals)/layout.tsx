import ThemeRegistry from '@/data/theme/themeRegistry';
import Footer from '@/layouts/Footer';
import NavBar from '@/layouts/NavBar';

import { ReactNode, Suspense } from 'react';
import Loading from './loading';

export default function RentalsLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeRegistry options={{ key: 'mui-theme' }} lightModeOnly>
			<NavBar />
			<main>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</main>
			<Footer />
		</ThemeRegistry>
	);
}
