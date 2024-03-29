import { AttachMoney } from '@mui/icons-material';
import FilterButton from './FilterButton';
import { Box, Slider, Typography } from '@mui/material';
import { useState } from 'react';
import {
	MAX_PRICE,
	MIN_PRICE,
	PRICE_DISTANCE,
	PRICE_MARKS,
	PRICE_STEP,
} from '@/data/constants';
import { useDebounce } from '@/hooks/useDebounce';
import useSearchQuery from '@/hooks/useSearchQuery';
import { useSearchParams } from 'next/navigation';

const PRICE_PARAM = 'price';

export default function PriceFilter() {
	const searchParams = useSearchParams();
	const initialValue = searchParams
		?.get(PRICE_PARAM)
		?.split(',')
		.map(Number) ?? [MIN_PRICE, MAX_PRICE];
	const [value, setValue] = useState<number[]>(initialValue);
	const debouncedValue = useDebounce(value);
	useSearchQuery('price', '' + debouncedValue);

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

	return (
		<>
			<Typography sx={{ px: 2, pt: 2 }}>Enter the price range:</Typography>
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
					id='price-range'
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
		</>
	);
}
