'use client';

import ListingLink from '@/components/ui/admin/ListingLink';
import { PROPERTY_TYPE } from '@/data/types';
import formatPrice from '@/utils/formatters/formatPrice';
import { getSession } from '@/utils/server-actions/auth';
import { AdminListing } from '@/utils/server-actions/getListingsForAdmin';
import { Bathroom, BathroomOutlined, BedOutlined } from '@mui/icons-material';
import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import {
	DataGrid,
	GridColDef,
	GridColumnHeaderParams,
	GridRenderCellParams,
	GridToolbar,
	GridValueFormatterParams,
} from '@mui/x-data-grid';
import Link from 'next/link';
import { useMemo } from 'react';

const VISIBLE_FIELDS = [
	'street',
	'cityProvince',
	'userName',
	'actions',
	'propertyType',
	'price',
	'numBedrooms',
	'numBathrooms',
	'date',
];

export default function PropertiesData({
	rows = [] as AdminListing[],
	userId = '',
	isSuperAdmin = false,
}: {
	rows: AdminListing[];
	userId: string;
	isSuperAdmin?: boolean;
}) {
	const columns: GridColDef[] = useMemo(
		() => [
			// { field: 'id', headerName: 'ID', width: 90 },
			{
				field: 'street',
				headerName: 'Street',
				minWidth: 200,
				renderCell: (params: GridRenderCellParams<any, string>) => (
					<ListingLink text={params.row.street} id={params.row.id} />
				),
			},

			{
				field: 'cityProvince',
				headerName: 'City, Province',
				minWidth: 210,
			},
			{
				field: 'userName',
				headerName: 'Owner / Landlord',
				minWidth: 150,
			},
			{
				field: 'actions',
				headerName: 'Actions',
				minWidth: 200,
				sortable: false,
				renderCell: (params: GridRenderCellParams<any, string>) =>
					userId === params.row.userId || isSuperAdmin ? (
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
								LinkComponent={Link}
								href={`/properties/edit/${params.row.id}`}
							>
								Edit
							</Button>
							<Button
								sx={{
									px: 2,
									py: 1,
								}}
								color='warning'
								LinkComponent={Link}
								href={`/properties/edit/${params.row.id}?action=delete`}
							>
								Delete
							</Button>
						</ButtonGroup>
					) : (
						''
					),
			},
			{
				field: 'propertyType',
				headerName: 'Property Type',
				minWidth: 150,
			},
			{
				field: 'price',
				headerName: 'Price',
				type: 'number',
				renderCell: (params: GridRenderCellParams) =>
					formatPrice(params.row.price),
				minWidth: 60,
			},
			{
				field: 'numBedrooms',
				renderHeader: (params: GridColumnHeaderParams) => <BedOutlined />,
				type: 'number',
				align: 'center',
				headerAlign: 'center',
				minWidth: 12,
			},
			{
				field: 'numBathrooms',
				renderHeader: (params: GridColumnHeaderParams) => <BathroomOutlined />,
				type: 'number',
				headerAlign: 'center',
				align: 'center',
				minWidth: 12,
			},
			{
				field: 'date',
				headerName: 'Date Listed',
				minWidth: 150,
			},
		],
		[]
	);

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
			disableColumnFilter
			disableColumnSelector
			disableDensitySelector
			disableColumnMenu
			autoHeight
			pageSizeOptions={[20]}
			slots={{ toolbar: GridToolbar }}
			slotProps={{
				toolbar: {
					printOptions: { disableToolbarButton: true },
					csvOptions: { disableToolbarButton: true },
					showQuickFilter: true,
					quickFilterProps: {
						variant: 'outlined',
						size: 'small',
						sx: {
							m: 1,
						},
					},
				},
			}}
			// checkboxSelection
			disableRowSelectionOnClick
		/>
	);
}
