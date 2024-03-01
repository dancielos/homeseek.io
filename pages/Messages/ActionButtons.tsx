import { MessagesRow } from '@/data/types';
import { Button, ButtonGroup } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';

export default function ActionButtons({
	params = {
		row: {
			id: '',
		},
	} as GridCellParams<any, string>,

	onView = () => {},
	onDelete = () => {},
}: {
	params: GridCellParams<any, string>;
	onView: (message: MessagesRow) => void;
	onDelete: (id: string) => void;
}) {
	return (
		<strong>
			<ButtonGroup
				variant='outlined'
				sx={{
					fontSize: '1rem',
					height: '1rem',
				}}
				// color='subtle'
				aria-label='outlined button group'
				disableElevation
			>
				<Button
					sx={{
						px: 2,
						py: 1,
					}}
					color='inherit'
					onClick={() => onView(params.row)}
				>
					View
				</Button>

				<Button
					sx={{
						px: 2,
						py: 1,
					}}
					color='warning'
					onClick={() => onDelete(params.row.id)}
				>
					Delete
				</Button>
			</ButtonGroup>
		</strong>
	);
}
