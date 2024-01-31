import { ArrowDropDown } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface FilterButtonProps extends ButtonProps {
	Icon?: ReactNode;
	label: string;
}

export default function FilterButton({
	Icon = null,
	label,

	...rest
}: FilterButtonProps) {
	return (
		<Button
			// variant='contained'
			startIcon={Icon}
			endIcon={<ArrowDropDown />}
			sx={{
				textTransform: 'capitalize',
				boxShadow: 'unset',
			}}
			{...rest}
		>
			{label}
		</Button>
	);
}
