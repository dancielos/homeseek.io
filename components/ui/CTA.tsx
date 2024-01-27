import { Button, ButtonProps } from '@mui/material';
import React from 'react';

interface CtaProps extends ButtonProps {
	children: React.ReactNode;
}

export default function CTA({ children, ...args }: CtaProps) {
	return (
		<Button color='secondary' variant='contained' {...args}>
			{children}
		</Button>
	);
}
