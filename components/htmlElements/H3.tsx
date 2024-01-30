import { Typography } from '@mui/material';
import React from 'react';

export default function H3({ children }: { children: React.ReactNode }) {
	return (
		<Typography component='h3' variant='h3'>
			{children}
		</Typography>
	);
}
