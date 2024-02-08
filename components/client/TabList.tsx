'use client';

import { setValue } from '@/data/slices/listingTabs';
import { AppDispatch } from '@/data/store';
import { TabList as MuiTabList } from '@mui/lab';

import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';

export default function TabList({ children }: { children: ReactNode }) {
	const dispatch = useDispatch<AppDispatch>();

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		dispatch(setValue(+newValue));
	};

	return (
		<MuiTabList
			textColor='inherit'
			indicatorColor='secondary'
			variant='scrollable'
			onChange={handleChange}
			aria-label='lab API tabs example'
			sx={{
				backgroundColor: 'primary.light',
			}}
		>
			{children}
		</MuiTabList>
	);
}
