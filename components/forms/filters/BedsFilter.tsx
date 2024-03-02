import { useDebounce } from '@/hooks/useDebounce';
import useSearchQuery from '@/hooks/useSearchQuery';
import { Box, Slider, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

const BED_PARAM = 'bed';

export default function BedsFilter() {
	const searchParams = useSearchParams();
	const initialValue = searchParams?.get(BED_PARAM)?.split(',').map(Number) ?? [
		1, 6,
	];
	const [value, setValue] = useState<number[]>(initialValue);
	const debouncedValue = useDebounce(value);
	useSearchQuery(BED_PARAM, '' + debouncedValue);

	const handleChangeSlider = (
		event: Event | SyntheticEvent<Element, Event>,
		newValue: number | number[]
	) => {
		if (!Array.isArray(newValue)) return;
		setValue(newValue as number[]);
	};

	return (
		<>
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
					id='bed-range'
					name='bed-range'
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
		</>
	);
}
