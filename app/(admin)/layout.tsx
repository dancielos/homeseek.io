import AdminAppBar from '@/layouts/admin/AdminAppBar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{/* <AdminAppBar /> */}
			<main>{children}</main>
		</>
	);
}
