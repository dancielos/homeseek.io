import { BedOutlined } from '@mui/icons-material';
import FilterButton from './FilterButton';
import { Box, Popover, Slider, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';

export default function BedsFilter({
	styles,
}: {
	styles: { readonly [key: string]: string };
}) {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const [value, setValue] = useState<number[]>([1, 6]);

	const handleChangeSlider = (event: Event, newValue: number | number[]) => {
		if (!Array.isArray(newValue)) return;
		setValue(newValue as number[]);
	};

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<FilterButton
			label='Beds'
			Icon={<BedOutlined />}
			className={styles['hide-on-smaller-screens']}
			onClick={handleClick}
		>
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
				<Typography sx={{ px: 2, pt: 2 }}>Number of bedrooms:</Typography>
				<Box
					sx={{
						width: 300,
						height: 72,
						pb: 2,
						display: 'flex',
						alignItems: 'end',
					}}
				>
					<Slider
						disableSwap
						name='price-range'
						sx={{ mx: 6 }}
						min={1}
						max={6}
						getAriaLabel={() => 'Number of bedrooms'}
						value={value}
						onChange={handleChangeSlider}
						valueLabelDisplay='on'
						valueLabelFormat={(x) => {
							if (x === 6) return `${x - 1}+`;
							return `${x}`;
						}}
					/>
				</Box>
			</Popover>
		</FilterButton>
	);
}