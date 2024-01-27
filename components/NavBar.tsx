'use client';

import { AppBar, Button, Icon, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@emotion/react';
import CTA from './ui/CTA';

export default function NavBar() {
	const theme = useTheme();
	return (
		<AppBar position='relative'>
			<Toolbar component='nav'>
				<HomeIcon sx={{ mr: 2 }} />
				<Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
					HomeSeek
				</Typography>
				<Button color='inherit'>Login</Button>
				<CTA>Post your listing</CTA>
			</Toolbar>
		</AppBar>
	);
}
