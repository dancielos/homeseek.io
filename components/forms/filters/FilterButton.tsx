import { ArrowDropDown } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';
import { MouseEvent, ReactNode } from 'react';

interface FilterButtonProps extends ButtonProps {
	Icon?: ReactNode;
	label: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	children?: ReactNode;
}

export default function FilterButton({
	Icon = null,
	label,
	onClick,
	children,
	...rest
}: FilterButtonProps) {
	return (
		<>
			<Button
				// variant='contained'
				startIcon={Icon}
				endIcon={<ArrowDropDown />}
				onClick={onClick}
				sx={{
					textTransform: 'capitalize',
					boxShadow: 'unset',
				}}
				{...rest}
			>
				{label}
			</Button>
			{children}
		</>
	);
}
