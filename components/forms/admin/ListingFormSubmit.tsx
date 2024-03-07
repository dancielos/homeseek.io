import CTA from '@/components/client/CTA';
import { Save } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

export default function ListingFormSubmit({
	text,
	isError = false,
}: {
	text: string;
	isError?: boolean;
}) {
	const { pending } = useFormStatus();

	return (
		<>
			{!pending ? (
				<CTA type='submit'>{text}</CTA>
			) : (
				<>
					<Dialog
						open={pending}
						aria-labelledby='alert-dialog-title'
						aria-describedby='alert-dialog-description'
					>
						<DialogContent>
							<DialogContentText
								textAlign='center'
								id='alert-dialog-description'
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 2,
								}}
							>
								<CircularProgress />
								Creating a new listing, please wait a moment.
							</DialogContentText>
						</DialogContent>
					</Dialog>
					<CTA disabled>Saving...</CTA>
				</>
			)}
		</>
	);
}
