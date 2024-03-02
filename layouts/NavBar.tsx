// 'use client';

import {
	AppBar,
	Box,
	Button,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from '@mui/material';

import CTA from '../components/client/CTA';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import Logo from './Logo';
import { Suspense } from 'react';
import LoginLink from '@/components/forms/login/LoginLink';

export default function NavBar() {
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
					<Suspense>
						<LoginLink />
					</Suspense>
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
