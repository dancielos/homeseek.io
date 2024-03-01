'use client';

import defineColsMessages from './defineColsMessages';
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

import InfoBox from '@/components/htmlElements/InfoBox';

export default function DataGridMessages({ rows }: { rows: MessagesRow[] }) {
	const [dialogMessage, setDialogMessage] = useState<MessagesRow | null>(null);
	const open = Boolean(dialogMessage);

	const [messageId, setMessageId] = useState<string | null>(null);
	const deleteDialogOpen = Boolean(messageId);

	// const deleteActionWithId = deleteMessage.bind(null, '' + messageId);
	// console.log({ messageId });
	const [response, setResponse] = useState<string>('');

	const [snackBarMessage, setSnackBarMessage] = useState<string | null>(null);
	const openSnackBar = Boolean(snackBarMessage);

	useEffect(() => {
		setMessageId(null);
		handleOpenSnackBar(response);
		setDialogMessage(null);
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
						messageId={messageId as string}
						open={deleteDialogOpen}
						onClose={handleDeleteClose}
						setResponse={setResponse}
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
