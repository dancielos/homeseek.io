'use client';

import Link, { LinkProps } from 'next/link';
import { ReactNode, Suspense } from 'react';

import { Url } from 'next/dist/shared/lib/router/router';
import { UrlObject } from 'url';
import { Button } from '@mui/material';

import useFullPath from '@/hooks/useFullPath';

interface DetailsLinkProps extends LinkProps {
	children: ReactNode;
	href: Url | UrlObject;
	size?: 'small' | 'medium' | 'large';
}

function DetailsLinkButton({
	children,
	href,
	size = 'medium',
	...rest
}: DetailsLinkProps) {
	const prev = useFullPath();

	return (
		<Link
			{...rest}
			href={{
				pathname: href.toString(),
				query: {
					prev,
				},
			}}
		>
			<Button
				component='span'
				color='secondary'
				variant='contained'
				size={size}
			>
				{children}
			</Button>
		</Link>
	);
}

export default function DetailsLink({
	children,
	href,
	size,
	...rest
}: DetailsLinkProps) {
	return (
		<Suspense>
			<DetailsLinkButton size={size} href={href} {...rest}>
				{children}
			</DetailsLinkButton>
		</Suspense>
	);
}
