import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

export default function defineColsMessages(
	fn: (params: GridRenderCellParams<any, string>) => JSX.Element
): GridColDef[] {
	return [
		{
			field: 'name',
			headerName: 'From',
			minWidth: 120,
			disableColumnMenu: true,
		},
		{
			field: 'listing',
			headerName: 'Listing',
			minWidth: 250,
			disableColumnMenu: true,
		},
		{
			field: 'actions',
			headerName: 'Actions',
			minWidth: 200,
			sortable: false,
			disableColumnMenu: true,
			renderCell: fn,
		},
		{
			field: 'date',
			headerName: 'Date',
			minWidth: 120,
			disableColumnMenu: true,
		},
		{
			field: 'phoneNumber',
			headerName: 'Phone Number',
			minWidth: 120,
			disableColumnMenu: true,
		},
		{
			field: 'emailAddress',
			headerName: 'Email Address',
			type: 'string',
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
}
