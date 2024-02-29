'use client';

import defineColsMessages from '@/pages/Messages/defineCols';
import { MessagesRow } from '@/data/types';
import { Button, ButtonGroup } from '@mui/material';
import {
	DataGrid as MuiDataGrid,
	GridColDef,
	GridRenderCellParams,
} from '@mui/x-data-grid';
import ActionButtons from './ActionButtons';
import Dialog from './Dialog';
import { useState } from 'react';
import DeleteDialog from './DeleteDialog';

export default function DataGridMessages({ rows }: { rows: MessagesRow[] }) {
	const [dialogMessage, setDialogMessage] = useState<MessagesRow | null>(null);
	const open = Boolean(dialogMessage);

	const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

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
	function handleDelete(id: string) {
		setDeleteDialogOpen(true);
	}
	function handleClose() {
		setDialogMessage(null);
	}

	function handleDeleteClose() {
		setDeleteDialogOpen(false);
	}
	return (
		<>
			<DeleteDialog open={deleteDialogOpen} onClose={handleDeleteClose} />
			<Dialog
				message={dialogMessage}
				onClose={handleClose}
				open={open}
				onDelete={() => handleDelete('asd')}
			/>
			<MuiDataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				// checkboxSelection
				disableRowSelectionOnClick
			/>
		</>
	);
}
