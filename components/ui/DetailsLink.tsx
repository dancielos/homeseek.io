'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { HTMLProps, ReactNode } from 'react';
import CTA from './CTA';
import { Url } from 'next/dist/shared/lib/router/router';
import { UrlObject } from 'url';
import { Button } from '@mui/material';
import { HtmlProps } from 'next/dist/shared/lib/html-context.shared-runtime';

interface DetailsLinkProps extends LinkProps {
	children: ReactNode;
	href: Url | UrlObject;
}

export default function DetailsLink({
	children,
	href,
	...rest
}: DetailsLinkProps) {
	const currentPath = usePathname();
	const searchParams = useSearchParams();

	// TODO convert this into a util function
	// also, make sure to create a unit test for it

	const queries: string[] = [];
	if (searchParams) {
		for (const [key, value] of searchParams?.entries()) {
			queries.push(`${key}=${value}`);
		}
	}
	// console.log(queries);

	const prev = `${currentPath}?${queries.join('&')}`;

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
