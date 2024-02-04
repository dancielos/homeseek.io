import Footer from '@/layouts/Footer';
import NavBar from '@/layouts/NavBar';
import { Box } from '@mui/material';

import { ReactNode } from 'react';

export default function RentalsLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Box
			// sx={{
			// 	maxHeight: '100vh',
			// 	overflowY: 'auto',
			// }}
			>
				<NavBar />
				<main>{children}</main>
			</Box>
		</>
	);
}
