'use client';

import { MessagesRow } from '@/data/types';
import {
	Button,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	Dialog as MuiDialog,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Link from 'next/link';

export default function Dialog({
	message,
	onClose,
	onDelete,
	open,
}: {
	message: MessagesRow | null;
	onClose: () => void;
	onDelete: (id: string) => void;
	open: boolean;
}) {
	// console.log(message);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			{open && (
				<MuiDialog
					fullScreen={fullScreen}
					open={open}
					onClose={onClose}
					aria-labelledby='responsive-dialog-title'
				>
					<DialogTitle id='responsive-dialog-title'>
						{`${message?.name || ''} (${message?.emailAddress || ''})`}
					</DialogTitle>
					<DialogContent
						sx={{
							minWidth: '480px',
						}}
					>
						<DialogContentText
							sx={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Typography variant='body1'>{message?.listing || ''}</Typography>
							<Button
								href={`/listing/${message?.listingId}`}
								variant='contained'
								LinkComponent={Link}
								size='small'
							>
								View Listing
							</Button>
							<Divider
								sx={{
									m: 2,
								}}
							/>

							<Typography sx={{ minHeight: '120px' }}>
								{message?.message || ''}
							</Typography>
							<Divider
								sx={{
									m: 2,
								}}
							/>
							<Typography>Respond by:</Typography>
							<Typography>Email: {message?.emailAddress}</Typography>
							<Typography>Phone number: {message?.phoneNumber}</Typography>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button color='subtle' autoFocus onClick={onClose}>
							Close
						</Button>
						<Button
							variant='outlined'
							size='small'
							color='warning'
							onClick={() => onDelete(message?.id as string)}
							autoFocus
						>
							Delete
						</Button>
					</DialogActions>
				</MuiDialog>
			)}
		</>
	);
}
