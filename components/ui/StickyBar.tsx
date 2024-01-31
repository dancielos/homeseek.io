import { AppBar } from '@mui/material';
import { ReactNode } from 'react';

export default function StickyBar({ children }: { children: ReactNode }) {
	return (
		<AppBar
			position='sticky'
			// color='#fff4e6'
			sx={{
				bgcolor: '#fff4e69e',
				boxShadow: 'none',
				py: {
					xs: 1,
					sm: 2,
				},
			}}
			elevation={0}
		>
			{children}
		</AppBar>
	);
}
