'use client';

import H1 from '@/components/htmlElements/H1';
import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { usePathname } from 'next/navigation';
import CTA from '../CTA';

export default function PageTitle({ title = '' }: { title?: string }) {
	const pathname = usePathname();

	if (pathname === '/properties') title = 'Properties';
	else if (pathname === '/properties/new') title = 'Add New Property';
	else if (pathname.startsWith('/properties/edit')) title = 'Editing Property';
	else if (pathname === '/messages') title = 'Messages';
	// else if (pathname === '/dashboard') title = `${}`
	return (
		<Grid
			container
			columns={10}
			// gap={2}
			mb={2}
			spacing={2}
		>
			<Grid xs={10} sm={5} display='flex' alignItems='center' gap={2}>
				<H1
					sx={{
						pb: 0,
						letterSpacing: 1,
						fontSize: {
							xs: '1.2rem',
							md: '1.6rem',
						},
						textAlign: 'left',
					}}
					id='dashboard-title'
				>
					{title}
				</H1>
				{pathname === '/properties' && (
					<CTA href='/properties/new' id='add-new-property-link'>
						Add new Property
					</CTA>
				)}
			</Grid>
			{/* {pathname === '/properties' && (
				<Grid xs={10} sm={5} display='flex' justifyContent='flex-end'>
					<TextField
						size='small'
						variant='outlined'
						type='search'
						label='Search Property'
					/>
					<Button variant='subtle'>Search</Button>
				</Grid>
			)} */}
		</Grid>
	);
}
