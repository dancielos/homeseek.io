import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import styles from './AdminAppBar.module.css';

export default function AdminAppBar({
	open,
	handleDrawerOpen,
}: {
	open: boolean;
	handleDrawerOpen: () => void;
}) {
	return (
		<AppBar
			position='fixed'
			// open={open}
			className={`${styles['app-bar']} ${open ? styles['open'] : ''}`}
		>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					onClick={handleDrawerOpen}
					edge='start'
					sx={{
						marginRight: 5,
						...(open && { display: 'none' }),
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' noWrap component='div'>
					Mini variant drawer
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
