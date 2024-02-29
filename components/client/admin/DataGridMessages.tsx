'use client';

import { MessagesRow } from '@/data/types';
import { Button, ButtonGroup } from '@mui/material';
import {
	DataGrid as MuiDataGrid,
	GridColDef,
	GridRenderCellParams,
} from '@mui/x-data-grid';

const columns: GridColDef[] = [
	// { field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'name',
		headerName: 'From',
		minWidth: 120,
		// editable: true,
		disableColumnMenu: true,
	},
	{
		field: 'listing',
		headerName: 'Listing',
		// width: 150,
		minWidth: 250,
		disableColumnMenu: true,
		// editable: true,
	},
	{
		field: 'actions',
		headerName: 'Actions',
		minWidth: 200,
		// width: 150,
		sortable: false,
		disableColumnMenu: true,
		// editable: true,
		renderCell: (params: GridRenderCellParams<any, string>) => (
			<strong>
				<ButtonGroup
					variant='outlined'
					// size='small'
					sx={{
						fontSize: '1rem',
						height: '1rem',
					}}
					color='subtle'
					aria-label='outlined button group'
					disableElevation
				>
					<Button
						sx={{
							px: 2,
							py: 1,
						}}
					>
						{/* {params.row.name} */}
						View
					</Button>

					<Button
						sx={{
							px: 2,
							py: 1,
						}}
						color='warning'
					>
						Delete
					</Button>
				</ButtonGroup>
			</strong>
		),
	},
	{
		field: 'date',
		headerName: 'Date',
		minWidth: 120,
		// width: 150,
		disableColumnMenu: true,
		// editable: true,
	},
	{
		field: 'phoneNumber',
		headerName: 'Phone Number',
		minWidth: 120,
		// width: 150,
		disableColumnMenu: true,
		// editable: true,
	},
	{
		field: 'emailAddress',
		headerName: 'Email Address',
		type: 'number',
		minWidth: 120,
		// width: 150,
		disableColumnMenu: true,
		// editable: true,
	},
	{
		field: 'message',
		headerName: 'Message',
		// width: 150,
		minWidth: 250,
		disableColumnMenu: true,
		// editable: true,
	},
];

export default function DataGridMessages({ rows }: { rows: MessagesRow[] }) {
	return (
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
	);
}
