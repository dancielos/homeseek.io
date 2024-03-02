'use client';

import ListingLink from '@/components/ui/admin/ListingLink';
import { PROPERTY_TYPE } from '@/data/types';
import { AdminListing } from '@/utils/server-actions/getListingsForAdmin';
import { Bathroom, BathroomOutlined, BedOutlined } from '@mui/icons-material';
import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import {
	DataGrid,
	GridColDef,
	GridColumnHeaderParams,
	GridRenderCellParams,
	GridValueFormatterParams,
} from '@mui/x-data-grid';

export default function PropertiesData({
	rows = [] as AdminListing[],
}: {
	rows: AdminListing[];
}) {
	const columns: GridColDef[] = [
		// { field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'street',
			headerName: 'Street',
			minWidth: 200,
			disableColumnMenu: true,
			renderCell: (params: GridRenderCellParams<any, string>) => (
				<ListingLink text={params.row.street} id={params.row.id} />
			),
		},

		{
			field: 'cityProvince',
			headerName: 'City, Province',
			minWidth: 210,
			disableColumnMenu: true,
		},
		{
			field: 'userName',
			headerName: 'Owner / Landlord',
			minWidth: 150,
			disableColumnMenu: true,
		},
		{
			field: 'actions',
			headerName: 'Actions',
			minWidth: 200,
			sortable: false,
			disableColumnMenu: true,
			renderCell: (params: GridRenderCellParams<any, string>) => (
				<ButtonGroup
					variant='outlined'
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
			),
		},
		{
			field: 'propertyType',
			headerName: 'Property Type',
			minWidth: 150,
			disableColumnMenu: true,
		},
		{
			field: 'price',
			headerName: 'Price',
			minWidth: 60,
			disableColumnMenu: true,
		},
		{
			field: 'numBedrooms',
			renderHeader: (params: GridColumnHeaderParams) => <BedOutlined />,
			type: 'number',
			align: 'center',
			headerAlign: 'center',
			minWidth: 12,
			disableColumnMenu: true,
		},
		{
			field: 'numBathrooms',
			renderHeader: (params: GridColumnHeaderParams) => <BathroomOutlined />,
			type: 'number',
			headerAlign: 'center',
			align: 'center',
			minWidth: 12,
			disableColumnMenu: true,
		},
		{
			field: 'date',
			headerName: 'Date Listed',
			minWidth: 150,
			disableColumnMenu: true,
		},
	];

	return (
		<DataGrid
			rows={rows}
			columns={columns}
			initialState={{
				pagination: {
					paginationModel: {
						pageSize: 20,
					},
				},
			}}
			pageSizeOptions={[20]}
			// checkboxSelection
			disableRowSelectionOnClick
		/>
	);
}
