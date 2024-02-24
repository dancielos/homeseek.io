import { ArrowDropDown } from '@mui/icons-material';
import { Button, ButtonProps, Popover } from '@mui/material';
import { MouseEvent, ReactNode } from 'react';

interface FilterButtonProps extends ButtonProps {
	Icon?: ReactNode;
	label: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	children?: ReactNode;
	popover?: boolean;
	popoverOpen?: boolean;
	anchorEl?: HTMLButtonElement | null;
	onPopoverClose?: () => void;
}

export default function FilterButton({
	Icon = null,
	label,
	onClick,
	children,
	popover = true,
	popoverOpen = false,
	anchorEl = null,
	onPopoverClose,
	...rest
}: FilterButtonProps) {
	const id = popoverOpen ? 'simple-popover' : undefined;
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
			{popover ? (
				<Popover
					id={id}
					open={popoverOpen}
					anchorEl={anchorEl}
					onClose={onPopoverClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
				>
					{children}
				</Popover>
			) : (
				<>{children}</>
			)}
		</>
	);
}
