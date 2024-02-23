import { AttachMoney } from '@mui/icons-material';
import FilterButton from './FilterButton';
import { Box, Popover, Slider, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';
import {
	MAX_PRICE,
	MIN_PRICE,
	PRICE_DISTANCE,
	PRICE_MARKS,
	PRICE_STEP,
} from '@/data/constants';

export default function PriceFilter() {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const [value, setValue] = useState<number[]>([MIN_PRICE, MAX_PRICE]);

	const handleChangeSlider = (
		event: Event,
		newValue: number | number[],
		activeThumb: number
	) => {
		if (!Array.isArray(newValue)) return;

		if (newValue[1] - newValue[0] < PRICE_DISTANCE) {
			if (activeThumb === 0) {
				const clamped = Math.min(newValue[0], 100 - PRICE_DISTANCE);
				setValue([clamped, clamped + PRICE_DISTANCE]);
			} else {
				const clamped = Math.max(newValue[1], PRICE_DISTANCE);
				setValue([clamped - PRICE_DISTANCE, clamped]);
			}
		} else {
			setValue(newValue as number[]);
		}
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
		<FilterButton label='Price' Icon={<AttachMoney />} onClick={handleClick}>
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
				<Typography sx={{ px: 2, pt: 2 }}>Enter the price range:</Typography>
				<Box
					sx={{
						width: 300,
						height: 64,
						display: 'flex',
						alignItems: 'end',
					}}
				>
					<Slider
						disableSwap
						name='price-range'
						sx={{ mx: 6 }}
						min={MIN_PRICE}
						max={MAX_PRICE}
						step={PRICE_STEP}
						getAriaLabel={() => 'Listing Price'}
						marks={PRICE_MARKS}
						value={value}
						onChange={handleChangeSlider}
						valueLabelDisplay='on'
						valueLabelFormat={(x) => `$${x}`}
					/>
				</Box>
			</Popover>
		</FilterButton>
	);
}
