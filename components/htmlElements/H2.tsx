import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

interface H2Props extends TypographyProps {
	children: React.ReactNode;
	smaller?: boolean;
}

export default function H2({ children, smaller = false, ...args }: H2Props) {
	const customStyle = smaller
		? {
				fontSize: {
					xs: '1.2rem',
					sm: '1.8rem',
					md: '2rem',
				},
		  }
		: {
				fontSize: {
					xs: '2rem',
					sm: '2.5rem',
					md: '3rem',
				},
		  };

	return (
		<Typography component='h2' variant='h2' sx={customStyle} {...args}>
			{children}
		</Typography>
	);
}
