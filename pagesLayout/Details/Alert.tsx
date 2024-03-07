'use client';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Alert() {
	const params = useSearchParams();
	const [open, setOpen] = useState(params.get('status') === 'success');

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>{'Success!'}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					You have successfully created a new Listing.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					color='secondary'
					variant='contained'
					onClick={handleClose}
					autoFocus
				>
					Okay
				</Button>
			</DialogActions>
		</Dialog>
	);
}
