'use client';

import { ArrowBackOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
// import { useRouter } from 'next/navigation';

function Button() {
	// const router = useRouter();

	const searchParams = useSearchParams();
	const prev = searchParams?.get('prev') || '/';
	// console.log({ prev });
	return (
		<IconButton
			color='secondary'
			sx={{
				flexBasis: {
					sm: '5%',
					md: '10%',
				},
				py: 2,
				borderRadius: 0,
				borderRight: 'solid',
			}}
			LinkComponent={Link}
			// href='#'
			href={prev}
			data-testid='go-back'
		>
			<ArrowBackOutlined />
		</IconButton>
	);
}

export default function BackButton() {
	return (
		<Suspense>
			<Button />
		</Suspense>
	);
}
