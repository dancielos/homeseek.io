// 'use client';

import {
	AppBar,
	Box,
	Button,
	IconButton,
	// Icon,
	// Stack,
	Toolbar,
	Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
// import { useTheme } from '@emotion/react';
import CTA from '../components/ui/CTA';
import { Menu } from '@mui/icons-material';

export default function NavBar() {
	// const theme = useTheme();
	return (
		<AppBar position='relative' elevation={0}>
			<Toolbar component='nav'>
				<HomeIcon
					sx={{
						mr: {
							xs: 0.2,
							xm: 1,
						},
					}}
				/>
				<Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
					HomeSeek
				</Typography>

				<Button
					color='inherit'
					sx={{
						display: {
							xs: 'none',
							xm: 'inherit',
						},
					}}
				>
					Login
				</Button>
				<CTA
					fluid
					sx={{
						display: {
							xs: 'none',
							xm: 'inherit',
						},
					}}
				>
					Post your listing
				</CTA>
				<Box
					sx={{ flexGrow: 1, display: { xs: 'flex', xm: 'none' } }}
					justifyContent='flex-end'
				>
					<IconButton
						size='large'
						aria-label='account of current user'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						color='inherit'
					>
						<Menu />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
