'use client';

import { TextField } from '@mui/material';
import CTA from '../../client/CTA';
import { useFormStatus } from 'react-dom';
import { LoadingButton } from '@mui/lab';
import { Save } from '@mui/icons-material';

export default function LoginFields() {
	const { pending } = useFormStatus();
	return (
		<>
			<TextField
				required
				fullWidth
				variant='filled'
				id='email'
				label='Email Address'
				name='email'
				autoFocus
			/>
			<TextField
				variant='filled'
				required
				fullWidth
				name='password'
				label='Password'
				type='password'
				id='password'
			/>

			{pending ? (
				<LoadingButton
					loading
					loadingPosition='start'
					startIcon={<Save />}
					variant='outlined'
				>
					Signing in...
				</LoadingButton>
			) : (
				<CTA type='submit' fullWidth>
					Sign In
				</CTA>
			)}
		</>
	);
}
