'use client';

import { ReactNode, useContext } from 'react';
import { TabContext, TabContextType } from './TabContext';
import { Tabs } from '@mui/material';

export default function TabList({ children }: { children: ReactNode }) {
	const { setTabNumber, tabNumber } = useContext(TabContext) as TabContextType;

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setTabNumber(newValue);
	};

	return (
		<Tabs
			textColor='inherit'
			indicatorColor='secondary'
			variant='scrollable'
			onChange={handleChange}
			value={tabNumber}
			sx={{
				backgroundColor: 'primary.light',
			}}
		>
			{children}
		</Tabs>
	);
}
