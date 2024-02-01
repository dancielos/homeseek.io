import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

interface H3Props extends TypographyProps {
	children: React.ReactNode;
}

export default function H3({ children, ...args }: H3Props) {
	return (
		<Typography component='h3' variant='h3' {...args}>
			{children}
		</Typography>
	);
}
