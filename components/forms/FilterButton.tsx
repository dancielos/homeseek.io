import { ArrowDropDown } from '@mui/icons-material';
import { Button } from '@mui/material';
import { ReactNode } from 'react';

export default function FilterButton({
	Icon,
	label,
}: {
	Icon: ReactNode;
	label: string;
}) {
	return (
		<Button
			// variant='contained'
			startIcon={Icon}
			endIcon={<ArrowDropDown />}
			sx={{
				textTransform: 'capitalize',
				boxShadow: 'unset',
			}}
		>
			{label}
		</Button>
	);
}
