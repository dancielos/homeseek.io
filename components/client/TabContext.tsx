'use client';

import { useAppSelector } from '@/data/store';
import { TabContext as MuiTabContext } from '@mui/lab';

import { ReactNode } from 'react';

export default function TabContext({ children }: { children: ReactNode }) {
	const value = useAppSelector((state) => state.listingTabsReducer.value);
	return <MuiTabContext value={'' + value}>{children}</MuiTabContext>;
}
