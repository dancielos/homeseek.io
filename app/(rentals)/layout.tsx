import Footer from '@/layouts/Footer';
import NavBar from '@/layouts/NavBar';

import { ReactNode } from 'react';

export default function RentalsLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
