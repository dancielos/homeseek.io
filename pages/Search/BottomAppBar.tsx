import { AppBar, Box, Fab, IconButton, Toolbar } from '@mui/material';
import {
	AddIcCallOutlined,
	Menu,
	MoreOutlined,
	SearchOutlined,
} from '@mui/icons-material';

export default function BottomAppBar() {
	return (
		<AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
			<Toolbar>
				<IconButton color='inherit' aria-label='open drawer'>
					<Menu />
				</IconButton>

				<Box sx={{ flexGrow: 1 }} />
				<IconButton color='inherit'>
					<SearchOutlined />
				</IconButton>
				<IconButton color='inherit'>
					<MoreOutlined />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
