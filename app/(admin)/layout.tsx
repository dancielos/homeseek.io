import AdminAppBar from '@/layouts/AdminAppBar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<AdminAppBar />
			<main>{children}</main>
		</>
	);
}
