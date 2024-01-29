import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface CtaProps extends ButtonProps {
	children: React.ReactNode;
}

export default function CTA({ children, ...args }: CtaProps) {
	return (
		<Button
			color='secondary'
			variant='contained'
			href='#'
			{...args}
			LinkComponent={Link}
		>
			{children}
		</Button>
	);
}
