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
import CTA from '../components/client/CTA';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import Logo from './Logo';
import { getSession } from '@/utils/server-actions/auth';

// import styles from './NavBar.module.css';

export default async function NavBar() {
	const session = await getSession();
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
					{!session && (
						<Button
							color='inherit'
							sx={{
								display: {
									xs: 'none',
									xm: 'inherit',
								},
							}}
							LinkComponent={Link}
							id='navbar-link-login'
							href='/login'
						>
							Login
						</Button>
					)}
					<CTA
						fluid
						sx={{
							display: {
								xs: 'none',
								xm: 'inherit',
							},
						}}
						LinkComponent={Link}
						id='navbar-link-post-listing'
						href='/dashboard'
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
