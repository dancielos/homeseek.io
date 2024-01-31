import { Stack, TextField } from '@mui/material';
import CTA from '../ui/CTA';

export default function ListingContactForm() {
	return (
		<Stack
			component='form'
			style={{
				position: 'sticky',
				top: '100px',
			}}
			spacing={2}
		>
			<TextField id='outlined-basic' label='Name' variant='outlined' />
			<TextField id='outlined-basic' label='Phone number' variant='outlined' />
			<TextField id='outlined-basic' label='Email address' variant='outlined' />
			<TextField
				id='outlined-basic'
				label='Email address'
				variant='outlined'
				multiline
				rows={4}
			/>
			<CTA>Submit</CTA>
		</Stack>
	);
}
