import { Adb, Home, Menu, Settings } from '@mui/icons-material';
import {
	AppBar,
	Avatar,
	Box,
	Container,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import Logo from './Logo';

export default function AdminAppBar() {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar
					disableGutters
					sx={{
						justifyContent: 'space-between',
					}}
				>
					<Box
						flexBasis={'320px'}
						display='flex'
						// justifyContent='space-between'
					>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							// onClick={handleOpenNavMenu}
							color='secondary'
							sx={{
								border: 'solid 1px #ffa94d',
								borderRadius: '1px',
								p: 1,
								// borderColor: 'secondary',
								// borderWidth: '2px',
							}}
						>
							<Menu />
						</IconButton>
						<Logo />
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								// onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Settings />
							</IconButton>
						</Tooltip>
						{/* <Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu> */}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
