'use client';

import { Drawer } from '@mui/material';
import { ReactNode } from 'react';

import styles from './Drawer.module.css';
import { useAppSelector } from '@/data/store';

export default function ClientDrawer({ children }: { children: ReactNode }) {
	const open = useAppSelector((state) => state.adminDrawerReducer.open);

	return (
		<Drawer
			variant='permanent'
			open={open}
			className={`${styles['drawer']} ${
				open ? styles['open'] : styles['close']
			}`}
		>
			{children}
		</Drawer>
	);
}
