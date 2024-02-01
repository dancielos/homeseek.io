import { HProps } from '@/data/types';
import { Typography } from '@mui/material';
import React from 'react';

export default function H3({ children, ...args }: HProps) {
	return (
		<Typography component='h3' variant='h3' {...args}>
			{children}
		</Typography>
	);
}
