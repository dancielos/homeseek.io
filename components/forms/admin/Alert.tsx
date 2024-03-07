import { Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

export default function Alert({
	message,
	isError = false,
}: {
	message: string;
	isError: boolean;
}) {
	const [open, setOpen] = useState<boolean>(isError);
	const { pending } = useFormStatus();

	useEffect(() => {
		if (!pending) setOpen(isError);
	}, [isError, pending]);

	function handleClose() {
		setOpen(false);
	}

	return (
		<Snackbar
			open={open}
			autoHideDuration={3000}
			onClose={handleClose}
			message={message}
			// action={action}
		/>
	);
}
