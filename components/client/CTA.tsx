'use client';

import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface CtaProps extends ButtonProps {
	children: React.ReactNode;
	fluid?: boolean;
	mainPath?: string;
}

export default function CTA({
	children,
	fluid = false,
	mainPath = '/',
	...args
}: CtaProps) {
	let variant: 'contained' | 'fluid' = 'contained';
	if (fluid) {
		const pathname = usePathname();
		const isHomePage = pathname === mainPath;
		if (!isHomePage) variant = 'fluid';
	}
	// const linkComponent = args.type === 'link' ? Link :

	if (args.type === 'submit') {
		return (
			<Button color='secondary' variant={variant} {...args}>
				{children}
			</Button>
		);
	}

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
