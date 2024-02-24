import { ArrowDropDown } from '@mui/icons-material';
import { Button, ButtonProps, Popover } from '@mui/material';
import { MouseEvent, ReactNode } from 'react';

interface FilterButtonProps extends ButtonProps {
	Icon?: ReactNode;
	label: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	children?: ReactNode;
	popover?: boolean;
	popoverId?: 'simple-popover' | undefined;
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
	popoverId = undefined,
	popoverOpen = false,
	anchorEl = null,
	onPopoverClose,
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
			{popover ? (
				<Popover
					id={popoverId}
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
