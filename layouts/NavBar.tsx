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
	Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
// import { useTheme } from '@emotion/react';
import CTA from '../components/ui/CTA';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';

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
					<Button
						component='div'
						sx={{
							color: '#212529',
						}}
						// className={styles['link']}
						size='large'
						startIcon={<HomeIcon />}
					>
						<Typography
							variant='h5'
							sx={{ fontWeight: 700, textTransform: 'capitalize' }}
						>
							HomeSeek
						</Typography>
					</Button>
					{/* <IconButton component='div'>
						<HomeIcon />
						
					</IconButton> */}
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
