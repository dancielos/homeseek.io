'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, ButtonGroup } from '@mui/material';

const columns: GridColDef[] = [
	// { field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'from',
		headerName: 'From',
		minWidth: 150,
		// editable: true,
		disableColumnMenu: true,
	},
	{
		field: 'message',
		headerName: 'Message',
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
		renderCell: (params: GridRenderCellParams<any, Date>) => (
			<strong>
				{/* {params.value.getFullYear()} */}
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
		field: 'phoneNumber',
		headerName: 'Phone Number',
		minWidth: 200,
		// width: 150,
		disableColumnMenu: true,
		// editable: true,
	},
	{
		field: 'emailAddress',
		headerName: 'Email Address',
		type: 'number',
		minWidth: 200,
		// width: 150,
		disableColumnMenu: true,
		// editable: true,
	},
];

const rows = [
	{
		id: 1,
		from: 'John Doe',
		message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		actions: '',
		phoneNumber: '+1234567890',
		emailAddress: 'john.doe@example.com',
	},
	{
		id: 2,
		from: 'Alice Smith',
		message:
			'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		actions: '',
		phoneNumber: '+1987654321',
		emailAddress: 'alice.smith@example.com',
	},
	{
		id: 3,
		from: 'Bob Johnson',
		message:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		actions: '',
		phoneNumber: '+1555555555',
		emailAddress: 'bob.johnson@example.com',
	},
	{
		id: 4,
		from: 'Emma Brown',
		message:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		actions: '',
		phoneNumber: '+1666666666',
		emailAddress: 'emma.brown@example.com',
	},
	{
		id: 5,
		from: 'Michael Lee',
		message:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		actions: '',
		phoneNumber: '+1777777777',
		emailAddress: 'michael.lee@example.com',
	},
	{
		id: 6,
		from: 'Sarah Taylor',
		message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		actions: '',
		phoneNumber: '+1888888888',
		emailAddress: 'sarah.taylor@example.com',
	},
	{
		id: 7,
		from: 'David Wilson',
		message:
			'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		actions: '',
		phoneNumber: '+1999999999',
		emailAddress: 'david.wilson@example.com',
	},
	{
		id: 8,
		from: 'Olivia Martinez',
		message:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		actions: '',
		phoneNumber: '+1444444444',
		emailAddress: 'olivia.martinez@example.com',
	},
	{
		id: 9,
		from: 'James Garcia',
		message:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		actions: '',
		phoneNumber: '+1333333333',
		emailAddress: 'james.garcia@example.com',
	},
	{
		id: 10,
		from: 'Sophia Hernandez',
		message:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		actions: '',
		phoneNumber: '+1222222222',
		emailAddress: 'sophia.hernandez@example.com',
	},
	// Add more data as needed
];

export default function Messages() {
	return (
		<>
			<Box sx={{ overflow: 'auto' }}>
				<Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
					<DataGrid
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
				</Box>
			</Box>
		</>
	);
}
