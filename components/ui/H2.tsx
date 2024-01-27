import { Typography } from '@mui/material';
import React from 'react';

export default function H2({ children }: { children: React.ReactNode }) {
	return (
		<Typography component='h2' variant='h2'>
			{children}
		</Typography>
	);
}
