'use client';

import { Alert, Box, Stack, TextField } from '@mui/material';
import CTA from '../../client/CTA';
import H3 from '../../htmlElements/H3';
import { BOX_SHADOW } from '@/data/constants';
import postMessage from '@/utils/server-actions/postMessage';
import { useFormState } from 'react-dom';
import ContactField from './ContactField';
import { Suspense } from 'react';
import ContactSubmitButton from './ContactSubmitButton';

export default function ListingContactForm({
	id,
	address,
}: {
	id: string;
	address: string;
}) {
	const [response, formAction] = useFormState(postMessage, null);

	const invalidInputs =
		response && 'error' in response
			? (response?.error.map((e) => e) as string[])
			: [];

	const errorMessage =
		invalidInputs.length > 0
			? `Please enter correct and valid data: (${invalidInputs.join(', ')})`
			: '';

	const isSuccess = Boolean(response && 'success' in response);

	return (
		<>
			<Stack
				component='form'
				action={formAction}
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
				<input type='hidden' name='listingId' value={id} />
				<input type='hidden' name='address' value={address} />
				<ContactField
					name='name'
					isSuccess={isSuccess}
					isError={invalidInputs?.includes('name')}
				/>
				<ContactField
					name='phone'
					isSuccess={isSuccess}
					isError={invalidInputs?.includes('phone')}
				/>
				<ContactField
					name='email'
					isSuccess={isSuccess}
					isError={invalidInputs?.includes('email')}
				/>
				<TextField
					id='contact-form__message'
					disabled={isSuccess}
					error={invalidInputs?.includes('message')}
					name='message'
					label='Message'
					variant='filled'
					required
					multiline
					rows={4}
				/>
				{response && 'success' in response ? (
					<Alert severity='success'>{response.success}</Alert>
				) : (
					<Suspense>
						<ContactSubmitButton />
					</Suspense>
				)}
				{errorMessage ? (
					<Alert severity='error' sx={{ textAlign: 'center' }}>
						{errorMessage}
					</Alert>
				) : (
					''
				)}
			</Stack>
		</>
	);
}
