import { Typography } from '@mui/material';
import React from 'react';

export default function H2({ children }: { children: React.ReactNode }) {
	return (
		<Typography
			component='h2'
			variant='h2'
			sx={{
				fontSize: {
					xs: '2rem',
					sm: '2.5rem',
					md: '3rem',
				},
			}}
		>
			{children}
		</Typography>
	);
}
