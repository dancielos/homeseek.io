import { MessagesRow } from '@/data/types';
import { Button, ButtonGroup } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';

export default function ActionButtons({
	params,
	onView,
	onDelete,
}: {
	params: GridRenderCellParams<any, string>;
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
				color='subtle'
				aria-label='outlined button group'
				disableElevation
			>
				<Button
					sx={{
						px: 2,
						py: 1,
					}}
					onClick={() => onView(params.row)}
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
					onClick={() => onDelete(params.row.id)}
				>
					Delete
				</Button>
			</ButtonGroup>
		</strong>
	);
}
