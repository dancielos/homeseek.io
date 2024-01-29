import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

interface paragraphProps extends TypographyProps {
	children: React.ReactNode;
}

export default function P({ children, ...rest }: paragraphProps) {
	return (
		<Typography variant='body1' {...rest}>
			{children}
		</Typography>
	);
}
