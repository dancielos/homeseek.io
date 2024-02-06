'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, ButtonGroup } from '@mui/material';

const columns: GridColDef[] = [
	// { field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'street',
		headerName: 'Street',
		minWidth: 150,
		// editable: true,
		disableColumnMenu: true,
	},
	{
		field: 'city',
		headerName: 'City',
		// width: 150,
		minWidth: 150,
		disableColumnMenu: true,
		// editable: true,
	},
	{
		field: 'province',
		headerName: 'Province',
		minWidth: 150,
		// width: 150,
		disableColumnMenu: true,
		// editable: true,
	},
	{
		field: 'actions',
		headerName: 'Actions',
		minWidth: 240,
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
					color='black'
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
					>
						Edit
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
		field: 'propertyType',
		headerName: 'Property Type',
		type: 'number',
		minWidth: 150,
		// width: 150,
		disableColumnMenu: true,
		// editable: true,
	},
	{
		field: 'price',
		headerName: 'Price',
		type: 'number',
		minWidth: 150,
		// width: 150,
		disableColumnMenu: true,
		// editable: true,
	},
	{
		field: 'room',
		headerName: '# rooms',
		type: 'number',
		minWidth: 150,
		// width: 100,
		disableColumnMenu: true,
		// editable: true,
	},
	// {
	// 	field: 'fullName',
	// 	headerName: 'Full name',
	// 	description: 'This column has a value getter and is not sortable.',
	// 	sortable: false,
	// 	width: 160,
	// 	valueGetter: (params: GridValueGetterParams) =>
	// 		`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	// },
];

const rows = [
	{
		id: 1,
		street: '123 Main St',
		city: 'Calgary',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 1,
		price: 200000,
		room: 3,
	},
	{
		id: 2,
		street: '456 Elm St',
		city: 'Edmonton',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 2,
		price: 350000,
		room: 4,
	},
	{
		id: 3,
		street: '789 Oak St',
		city: 'Toronto',
		province: 'ON',
		actions: 'Edit/Delete',
		propertyType: 1,
		price: 180000,
		room: 2,
	},
	{
		id: 4,
		street: '101 Pine St',
		city: 'Vancouver',
		province: 'BC',
		actions: 'Edit/Delete',
		propertyType: 3,
		price: 500000,
		room: 5,
	},
	{
		id: 5,
		street: '202 Maple St',
		city: 'Calgary',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 2,
		price: 300000,
		room: 4,
	},
	{
		id: 6,
		street: '303 Cedar St',
		city: 'Edmonton',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 1,
		price: 220000,
		room: 3,
	},
	{
		id: 7,
		street: '404 Birch St',
		city: 'Toronto',
		province: 'ON',
		actions: 'Edit/Delete',
		propertyType: 3,
		price: 480000,
		room: 4,
	},
	{
		id: 8,
		street: '505 Ash St',
		city: 'Vancouver',
		province: 'BC',
		actions: 'Edit/Delete',
		propertyType: 2,
		price: 320000,
		room: 3,
	},
	{
		id: 9,
		street: '606 Pine St',
		city: 'Calgary',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 1,
		price: 240000,
		room: 2,
	},
	{
		id: 10,
		street: '707 Elm St',
		city: 'Edmonton',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 3,
		price: 480000,
		room: 5,
	},
	{
		id: 11,
		street: '808 Oak St',
		city: 'Toronto',
		province: 'ON',
		actions: 'Edit/Delete',
		propertyType: 1,
		price: 210000,
		room: 4,
	},
	{
		id: 12,
		street: '909 Maple St',
		city: 'Vancouver',
		province: 'BC',
		actions: 'Edit/Delete',
		propertyType: 2,
		price: 330000,
		room: 3,
	},
	{
		id: 13,
		street: '111 Pine St',
		city: 'Calgary',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 3,
		price: 490000,
		room: 5,
	},
	{
		id: 14,
		street: '222 Cedar St',
		city: 'Edmonton',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 1,
		price: 250000,
		room: 3,
	},
	{
		id: 15,
		street: '333 Birch St',
		city: 'Toronto',
		province: 'ON',
		actions: 'Edit/Delete',
		propertyType: 2,
		price: 360000,
		room: 4,
	},
	{
		id: 16,
		street: '444 Ash St',
		city: 'Vancouver',
		province: 'BC',
		actions: 'Edit/Delete',
		propertyType: 3,
		price: 510000,
		room: 5,
	},
	{
		id: 17,
		street: '555 Elm St',
		city: 'Calgary',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 1,
		price: 260000,
		room: 2,
	},
	{
		id: 18,
		street: '666 Oak St',
		city: 'Edmonton',
		province: 'AB',
		actions: 'Edit/Delete',
		propertyType: 2,
		price: 390000,
		room: 4,
	},
	{
		id: 19,
		street: '777 Maple St',
		city: 'Toronto',
		province: 'ON',
		actions: 'Edit/Delete',
		propertyType: 1,
		price: 220000,
		room: 3,
	},
	{
		id: 20,
		street: '888 Pine St',
		city: 'Vancouver',
		province: 'BC',
		actions: 'Edit/Delete',
		propertyType: 3,
		price: 480000,
		room: 5,
	},
];

export default function Properties() {
	return (
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
	);
}
