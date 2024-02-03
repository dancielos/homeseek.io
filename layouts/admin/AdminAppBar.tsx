import { Toolbar, Typography } from '@mui/material';

import ClientAppBar from '@/components/client/admin/AppBar';
import ToggleDrawer from '@/components/client/admin/ToggleDrawer';
import { Menu } from '@mui/icons-material';
import Logo from '../Logo';

export default function AdminAppBar() {
	return (
		<ClientAppBar>
			<Toolbar>
				<ToggleDrawer drawerAction='open'>
					<Menu />
				</ToggleDrawer>
				<Typography variant='h6' noWrap component='div'>
					<Logo />
				</Typography>
			</Toolbar>
		</ClientAppBar>
	);
}
