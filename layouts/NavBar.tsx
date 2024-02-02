// 'use client';

import {
	AppBar,
	Box,
	Button,
	IconButton,
	Stack,
	// Icon,
	// Stack,
	Toolbar,
} from '@mui/material';
// import { useTheme } from '@emotion/react';
import CTA from '../components/ui/CTA';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import Logo from './Logo';

// import styles from './NavBar.module.css';

export default function NavBar() {
	// const theme = useTheme();
	return (
		<AppBar position='relative' elevation={0}>
			<Toolbar
				component='nav'
				sx={{
					justifyContent: 'space-between',
				}}
			>
				<Link href='/' id='homeseek-logo'>
					<Logo />
				</Link>
				<Stack flexDirection='row' gap={2}>
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
				</Stack>
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
