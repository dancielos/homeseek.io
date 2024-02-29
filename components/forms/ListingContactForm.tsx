import { Stack, TextField } from '@mui/material';
import CTA from '../client/CTA';
import H3 from '../htmlElements/H3';
import { BOX_SHADOW } from '@/data/constants';
import postMessage from '@/utils/server-actions/postMessage';

export default function ListingContactForm() {
	return (
		<>
			<Stack
				component='form'
				action={postMessage}
				id='contact-listing'
				data-testid='contact-listing'
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
				<TextField
					id='contact-form__name'
					label='Name'
					variant='filled'
					name='name'
				/>
				<TextField
					id='contact-form__phone'
					label='Phone number'
					variant='filled'
					name='phone'
				/>
				<TextField
					id='contact-form__email'
					label='Email address'
					variant='filled'
					name='email'
				/>
				<TextField
					id='contact-form__message'
					name='message'
					label='Message'
					variant='filled'
					multiline
					rows={4}
				/>
				<CTA type='submit'>Submit</CTA>
			</Stack>
		</>
	);
}
