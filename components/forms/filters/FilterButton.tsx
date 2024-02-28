import { ArrowDropDown } from '@mui/icons-material';
import { Button, ButtonProps, Popover } from '@mui/material';
import { MouseEvent, ReactNode, useState } from 'react';

interface FilterButtonProps extends ButtonProps {
	Icon?: ReactNode;
	label: string;
	// onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	buttonId: string;
	children?: ReactNode;
	popover?: boolean;
	// popoverOpen?: boolean;
	// anchorEl?: HTMLButtonElement | null;
	// onPopoverClose?: () => void;
}

export default function FilterButton({
	Icon = null,
	label,
	buttonId,
	// onClick,
	children,
	popover = true,
	// popoverOpen = false,
	// anchorEl = null,
	// onPopoverClose,
	...rest
}: FilterButtonProps) {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<>
			<Button
				// variant='contained'
				id={buttonId}
				startIcon={Icon}
				endIcon={<ArrowDropDown />}
				onClick={handleClick}
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
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
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
