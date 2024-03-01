'use client';

import defineColsMessages from './defineCols';
import { MessagesRow } from '@/data/types';
import { Snackbar } from '@mui/material';
import {
	DataGrid as MuiDataGrid,
	GridColDef,
	GridRenderCellParams,
} from '@mui/x-data-grid';
import ActionButtons from './ActionButtons';
import Dialog from './Dialog';
import { useEffect, useState } from 'react';
import DeleteDialog from './DeleteDialog';
import deleteMessage from '@/utils/server-actions/deleteMessage';
import { useFormState } from 'react-dom';
import InfoBox from '@/components/htmlElements/InfoBox';
// import deleteMessage from '@/utils/server-actions/deleteMessage';

export default function DataGridMessages({
	rows,
}: // onDelete,
{
	rows: MessagesRow[];
	// onDelete: (id: string) => Promise<{ success: string } | { error: string }>;
}) {
	const [dialogMessage, setDialogMessage] = useState<MessagesRow | null>(null);
	const open = Boolean(dialogMessage);

	const [messageId, setMessageId] = useState<string | null>(null);
	const deleteDialogOpen = Boolean(messageId);

	const deleteActionWithId = deleteMessage.bind(null, '' + messageId);
	// console.log({ messageId });
	const [response, deleteAction] = useFormState(deleteActionWithId, null);

	const [snackBarMessage, setSnackBarMessage] = useState<string | null>(null);
	const openSnackBar = Boolean(snackBarMessage);

	useEffect(() => {
		setMessageId(null);
		if (response && 'success' in response) {
			console.log('message deleted');
			handleOpenSnackBar(response.success);
			setDialogMessage(null);
		} else {
			if (response && 'error' in response) handleOpenSnackBar(response.error);
		}
	}, [response]);

	const columns: GridColDef[] = defineColsMessages(
		(params: GridRenderCellParams<any, string>) => (
			<ActionButtons
				params={params}
				onView={handleView}
				onDelete={handleDelete}
			/>
		)
	);

	function handleView(message: MessagesRow) {
		setDialogMessage(message);
	}
	function handleClose() {
		setDialogMessage(null);
	}
	function handleDelete(id: string) {
		setMessageId(id);
		// console.log(id);
	}
	function handleDeleteClose() {
		setMessageId(null);
	}
	// async function handleConfirmDelete() {
	// 	try {
	// 		if (messageId) {
	// 			// const response = await onDelete(messageId);
	// 			setMessageId(null);
	// 			if (response && 'success' in response) {
	// 				setDialogMessage(null);
	// 				handleOpenSnackBar(response.success);
	// 			} else {
	// 				setSnackBarMessage(response.error);
	// 				console.error('something went wrong.');
	// 			}
	// 		}
	// 	} catch (error) {
	// 		console.error('something went wrong.');
	// 	}

	// 	// deleteMessage(messageId as string);
	// }

	const handleOpenSnackBar = (text: string) => {
		setSnackBarMessage(text);
	};

	const handleCloseSnackBar = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setSnackBarMessage(null);
	};

	return (
		<>
			{openSnackBar && (
				<Snackbar
					open={openSnackBar}
					autoHideDuration={4000}
					onClose={handleCloseSnackBar}
					message={snackBarMessage}
				/>
			)}
			{rows.length > 0 ? (
				<>
					<DeleteDialog
						open={deleteDialogOpen}
						onClose={handleDeleteClose}
						onConfirm={async () => deleteAction()}
					/>
					<Dialog
						message={dialogMessage}
						onClose={handleClose}
						open={open}
						onDelete={handleDelete}
					/>
					<MuiDataGrid
						rows={rows}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: {
									pageSize: 10,
								},
							},
						}}
						pageSizeOptions={[10]}
						// checkboxSelection
						disableRowSelectionOnClick
					/>
				</>
			) : (
				<InfoBox message='You have no new messages.' />
			)}
		</>
	);
}
