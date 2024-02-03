'use client';

import { closeDrawer, openDrawer } from '@/data/slices/adminDrawer';
import { AppDispatch, useAppSelector } from '@/data/store';
import { IconButton, useMediaQuery } from '@mui/material';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function ToggleDrawer({
	children,
	drawerAction,
}: {
	children: ReactNode;
	drawerAction: 'open' | 'close';
}) {
	const isMobile = useMediaQuery('(max-width: 600px)');

	const open = useAppSelector((state) => state.adminDrawerReducer.open);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (isMobile) {
			// console.log(isMobile);
			dispatch(closeDrawer());
		}
	}, [isMobile]);

	function handleDrawerAction() {
		if (drawerAction === 'open') dispatch(openDrawer());
		if (drawerAction === 'close') dispatch(closeDrawer());
	}

	const openButtonSx = {
		marginRight: {
			sm: 0,
			md: 5,
		},
		pr: 2,
		pl: {
			xs: 2,
			sm: 1,
		},
		...(open && { display: 'none' }),
	};

	return (
		<IconButton
			color='inherit'
			aria-label='open drawer'
			onClick={handleDrawerAction}
			edge='start'
			sx={{
				...(drawerAction === 'open' && openButtonSx),
				...(drawerAction === 'close' && !open && { display: 'none' }),
			}}
		>
			{children}
		</IconButton>
	);
}
