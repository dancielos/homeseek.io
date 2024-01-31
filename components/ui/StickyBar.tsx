import { AppBar, SxProps } from '@mui/material';
import { ReactNode } from 'react';

type StickyBarProps = {
	children: ReactNode;
	sx?: SxProps;
};

export default function StickyBar({ children, sx }: StickyBarProps) {
	let customStyle: SxProps = {
		bgcolor: '#fff4e69e',
		boxShadow: 'none',
		py: {
			xs: 1,
			sm: 2,
		},
	};
	if (sx) customStyle = { ...customStyle, ...sx };

	return (
		<AppBar
			position='sticky'
			// color='#fff4e6'
			sx={customStyle}
			elevation={0}
		>
			{children}
		</AppBar>
	);
}
