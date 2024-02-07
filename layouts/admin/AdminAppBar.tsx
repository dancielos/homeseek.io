import { Stack, Toolbar, Typography } from '@mui/material';

import ClientAppBar from '@/components/client/admin/AppBar';
import ToggleDrawer from '@/components/client/admin/ToggleDrawer';
import { Menu } from '@mui/icons-material';
import Logo from '../Logo';
import ToggleTheme from '@/components/client/admin/ToggleTheme';

export default function AdminAppBar() {
	return (
		<ClientAppBar>
			<Toolbar
				sx={{
					justifyContent: 'space-between',
				}}
			>
				<Stack direction='row'>
					<ToggleDrawer drawerAction='open'>
						<Menu />
					</ToggleDrawer>
					<Typography variant='h6' noWrap component='div'>
						<Logo />
					</Typography>
				</Stack>

				<ToggleTheme />
			</Toolbar>
		</ClientAppBar>
	);
}
