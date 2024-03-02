'use client';

import CTA from '@/components/client/CTA';
import { Send } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useFormStatus } from 'react-dom';

export default function ContactSubmitButton() {
	const { pending } = useFormStatus();

	return (
		<>
			{!pending ? (
				<CTA type='submit'>Submit</CTA>
			) : (
				<LoadingButton
					loading
					loadingPosition='start'
					startIcon={<Send />}
					variant='outlined'
				>
					Sending...
				</LoadingButton>
			)}
		</>
	);
}
