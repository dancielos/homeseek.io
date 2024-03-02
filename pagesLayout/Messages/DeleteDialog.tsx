// import deleteMessageAction from '@/utils/server-actions/deleteMessageAction';
import deleteMessageAction from '@/utils/server-actions/deleteMessageAction';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

export default function DeleteDialog({
	messageId,
	open,
	onClose,
	setResponse,
}: {
	messageId: string;
	open: boolean;
	onClose: () => void;
	setResponse: (text: string) => void;
}) {
	const [response, deleteAction] = useFormState(deleteMessageAction, null);

	useEffect(() => {
		if (response && 'success' in response) setResponse(response.success);
		else if (response && 'error' in response) setResponse(response.error);
	}, [response]);

	return (
		<>
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
					<form action={deleteAction} id='delete-form'>
						<input
							name='id'
							type='hidden'
							id='delete-id'
							value={messageId || ''}
						/>
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
		</>
	);
}
