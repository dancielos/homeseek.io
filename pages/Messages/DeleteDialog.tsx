import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteDialog({
	open,
	onClose,
	onConfirm,
}: {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
}) {
	return (
		<React.Fragment>
			<Dialog
				open={open}
				onClose={onClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'Are you sure?'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are you sure you want to delete this message?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant='contained' color='warning' onClick={onClose}>
						Cancel
					</Button>
					<form action={onConfirm}>
						<Button
							variant='outlined'
							color='secondary'
							type='submit'
							autoFocus
						>
							Delete
						</Button>
					</form>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
