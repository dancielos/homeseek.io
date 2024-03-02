'use client';

import useFullPath from '@/hooks/useFullPath';
import { LaunchOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function ListingLink({
	id,
	text,
}: {
	id: string;
	text: string;
}) {
	const prev = useFullPath();
	return (
		<Link
			href={{
				pathname: `/listing/${id}`,
				query: {
					prev,
				},
			}}
			style={{
				color: 'inherit',
				padding: 0,
				margin: 0,
			}}
		>
			<Stack flexDirection='row' gap={1} alignItems='center'>
				<Typography
					variant='body2'
					sx={{
						textDecoration: 'underline',
					}}
				>
					{text}
				</Typography>
				<LaunchOutlined fontSize='inherit' />
			</Stack>
		</Link>
	);
}
