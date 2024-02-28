'use client';

import ListItem from '@/components/ui/admin/ListItem';
import { logout } from '@/utils/server-actions/auth';
import { Logout } from '@mui/icons-material';
import { List } from '@mui/material';

export default function LogoutButton() {
	return (
		<List>
			<ListItem
				text='Logout'
				Icon={Logout}
				id='drawer-link-logout'
				onClick={async () => {
					await logout();
				}}
			/>
		</List>
	);
}
