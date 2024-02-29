'use client';

import { Alert, Box } from '@mui/material';
import LoginFields from './LoginFields';
import { getSession, login } from '@/utils/server-actions/auth';
import { useFormState } from 'react-dom';
import { Suspense } from 'react';

export default function LoginForm() {
	const [message, formAction] = useFormState(login, null);

	return (
		<>
			<Box
				component='form'
				id='login-form'
				noValidate
				action={formAction}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'stretch',
					width: '100%',
					maxWidth: '480px',
					gap: 2,
				}}
			>
				<LoginFields />
			</Box>
			<Suspense>
				{message?.error ? (
					<Alert id='login-failed-message' severity='error'>
						{message.error}
					</Alert>
				) : null}
			</Suspense>
		</>
	);
}
