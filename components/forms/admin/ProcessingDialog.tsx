import {
	CircularProgress,
	Dialog,
	DialogContent,
	DialogContentText,
} from '@mui/material';

export default function ProcessingDialog({
	open,
	action,
}: {
	open: boolean;
	action: 'add' | 'edit';
}) {
	return (
		<Dialog
			open={open}
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
					{action === 'add'
						? 'Creating a new listing, please wait a moment...'
						: 'Updating listing, please wait a moment...'}
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
}
