'use client';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ConfirmDeleteDialog({
	onConfirm,
}: {
	onConfirm: () => void;
}) {
	const [open, setOpen] = useState<boolean>(false);

	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const action = searchParams.get('action');

	useEffect(() => {
		if (action === 'delete') setOpen(true);
		else setOpen(false);
	}, [action]);

	function handleClose() {
		setOpen(false);
		router.push(pathname, { scroll: false });
	}

	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'Are you sure?'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are you sure you want to delete this listing?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant='contained' color='warning' onClick={handleClose}>
						Cancel
					</Button>

					<Button variant='outlined' color='secondary' onClick={onConfirm}>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
