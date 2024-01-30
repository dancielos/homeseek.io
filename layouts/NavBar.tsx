// 'use client';

import {
	AppBar,
	Button,
	// Icon,
	// Stack,
	Toolbar,
	Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
// import { useTheme } from '@emotion/react';
import CTA from '../components/ui/CTA';
import NavBarCTA from '@/components/ui/NavBarCTA';

export default function NavBar() {
	// const theme = useTheme();
	return (
		<AppBar position='relative' elevation={0}>
			<Toolbar component='nav'>
				<HomeIcon
					sx={{
						mr: {
							xs: 0.2,
							sm: 1,
						},
					}}
				/>
				<Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
					HomeSeek
				</Typography>

				<Button color='inherit'>Login</Button>
				<NavBarCTA>Post your listing</NavBarCTA>
			</Toolbar>
		</AppBar>
	);
}
