'use client';

import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import { Url } from 'next/dist/shared/lib/router/router';
import { UrlObject } from 'url';
import { Button } from '@mui/material';

import useFullPath from '@/hooks/useFullPath';

interface DetailsLinkProps extends LinkProps {
	children: ReactNode;
	href: Url | UrlObject;
}

export default function DetailsLink({
	children,
	href,
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
			<Button component='span' color='secondary' variant='contained'>
				{children}
			</Button>
		</Link>
	);
}
