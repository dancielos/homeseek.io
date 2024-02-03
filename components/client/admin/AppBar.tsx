'use client';

import { ReactNode } from 'react';

import { AppBar } from '@mui/material';

import styles from './AppBar.module.css';
import { useAppSelector } from '@/data/store';

export default function ClientAppBar({ children }: { children: ReactNode }) {
	const open = useAppSelector((state) => state.adminDrawerReducer.open);

	return (
		<AppBar
			position='fixed'
			// open={open}
			className={`${styles['app-bar']} ${open ? styles['open'] : ''}`}
		>
			{children}
		</AppBar>
	);
}
