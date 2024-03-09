'use client';

import { Dashboard, Menu, NoteAdd, Person } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Dialog,
	DialogTitle,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import LoginLink from '../forms/login/LoginLink';
import CTA from './CTA';
import BurgerLogin from './BurgerLogin';

export default function BurgerMenu() {
	const [open, setOpen] = useState(false);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xm'));

	useEffect(() => {
		if (!isMobile) setOpen(false);
	}, [isMobile, setOpen]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{isMobile ? (
				<Dialog onClose={handleClose} open={open} fullWidth>
					<DialogTitle textAlign='center'>Menu</DialogTitle>
					<Divider />
					<List sx={{ pt: 0 }}>
						<Suspense
							fallback={
								<ListItem>
									<ListItemButton color='secondary'>
										<ListItemIcon>
											<Avatar />
										</ListItemIcon>
										<Typography sx={{ pb: 0 }}>Loading...</Typography>
									</ListItemButton>
								</ListItem>
							}
						>
							<BurgerLogin handleClose={handleClose} />
						</Suspense>
						<Divider />
						<ListItem>
							<ListItemButton
								LinkComponent={Link}
								color='secondary'
								href='/dashboard'
								onClick={handleClose}
							>
								<ListItemIcon>
									<NoteAdd fontSize='large' />
								</ListItemIcon>
								<Typography sx={{ pb: 0 }}>Post your listing</Typography>
							</ListItemButton>
						</ListItem>
					</List>
				</Dialog>
			) : (
				''
			)}

			<Box
				sx={{ flexGrow: 1, display: { xs: 'flex', xm: 'none' } }}
				justifyContent='flex-end'
			>
				<IconButton
					size='large'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					color='inherit'
					onClick={handleClickOpen}
				>
					<Menu />
				</IconButton>
			</Box>
		</>
	);
}
