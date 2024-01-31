import { Stack, TextField } from '@mui/material';
import CTA from '../ui/CTA';

export default function ListingContactForm() {
	return (
		<Stack
			component='form'
			sx={{
				position: 'sticky',
				top: '100px',
				p: 2,
			}}
			bgcolor='primary.light'
			spacing={2}
		>
			<TextField
				id='outlined-basic'
				color='secondary'
				label='Name'
				variant='filled'
			/>
			<TextField id='filled-basic' label='Phone number' variant='filled' />
			<TextField id='filled-basic' label='Email address' variant='filled' />
			<TextField
				id='filled-basic'
				label='Email address'
				variant='filled'
				multiline
				rows={4}
			/>
			<CTA>Submit</CTA>
		</Stack>
	);
}
