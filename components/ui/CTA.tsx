import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface CtaProps extends ButtonProps {
	children: React.ReactNode;
	variant?: 'contained' | 'outlined2';
}

export default function CTA({
	children,
	variant = 'contained',
	...args
}: CtaProps) {
	return (
		<Button
			color='secondary'
			variant={variant}
			href='#'
			{...args}
			LinkComponent={Link}
		>
			{children}
		</Button>
	);
}
