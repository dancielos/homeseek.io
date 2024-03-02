'use client';

import ListItem from '@/components/ui/admin/ListItem';
import { logout } from '@/utils/server-actions/auth';
import { Logout } from '@mui/icons-material';
import { List } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
	const router = useRouter();
	return (
		<List>
			<ListItem
				text='Logout'
				Icon={Logout}
				id='drawer-link-logout'
				onClick={async () => {
					await logout();
					router.push('/');
				}}
			/>
		</List>
	);
}
