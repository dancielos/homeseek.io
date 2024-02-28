'use client';

import { Alert, Box } from '@mui/material';
import LoginFields from './LoginFields';
import { getSession, login } from '@/utils/server-actions/auth';
import { useFormState } from 'react-dom';

export default function LoginForm() {
	const [message, formAction] = useFormState(login, null);

	return (
		<>
			<Box
				component='form'
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
			{message?.error ? <Alert severity='error'>{message.error}</Alert> : null}
		</>
	);
}
