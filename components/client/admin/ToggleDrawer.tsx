'use client';

import { closeDrawer, openDrawer } from '@/data/slices/adminDrawer';
import { AppDispatch, useAppSelector } from '@/data/store';
import { IconButton } from '@mui/material';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';

export default function ToggleDrawer({
	children,
	drawerAction,
}: {
	children: ReactNode;
	drawerAction: 'open' | 'close';
}) {
	// TODO:
	// will the const open be re-evaluated?

	const open = useAppSelector((state) => state.adminDrawerReducer.open);

	const dispatch = useDispatch<AppDispatch>();

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
