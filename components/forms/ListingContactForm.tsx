import { Stack, TextField } from '@mui/material';
import CTA from '../ui/CTA';
import H3 from '../htmlElements/H3';
import { BOX_SHADOW } from '@/data/constants';

export default function ListingContactForm() {
	return (
		<>
			<Stack
				component='form'
				sx={{
					position: 'sticky',
					top: '100px',
					p: 2,
				}}
				bgcolor='primary.light'
				spacing={2}
				boxShadow={BOX_SHADOW}
			>
				<H3
					sx={{
						fontSize: {
							// xs: '1.5rem',
							sm: '1.4rem',
							md: '2rem',
							fontWeight: 500,
						},
					}}
				>
					Contact Property Owner
				</H3>
				<TextField id='outlined-basic' label='Name' variant='filled' />
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
		</>
	);
}
