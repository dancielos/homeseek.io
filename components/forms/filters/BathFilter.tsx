import { useDebounce } from '@/hooks/useDebounce';
import useSearchQuery from '@/hooks/useSearchQuery';
import { getSearchQuery } from '@/utils/getters/getSearchQuery';
import { Box, Slider, Typography } from '@mui/material';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { SyntheticEvent, useEffect, useState } from 'react';

const BATH_PARAM = 'bath';

export default function BathFilter() {
	const searchParams = useSearchParams();
	const initialValue = searchParams
		?.get(BATH_PARAM)
		?.split(',')
		.map(Number) ?? [1, 3];
	const [value, setValue] = useState<number[]>(initialValue);
	const debouncedValue = useDebounce(value);
	useSearchQuery(BATH_PARAM, '' + debouncedValue);

	const handleChangeSlider = (
		event: Event | SyntheticEvent<Element, Event>,
		newValue: number | number[]
	) => {
		if (!Array.isArray(newValue)) return;
		setValue(newValue as number[]);
	};
	return (
		<>
			<Typography sx={{ px: 2, pt: 2 }}>Number of bathrooms:</Typography>
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
					id='bath-range'
					name='bath-range'
					sx={{ mx: 6 }}
					min={1}
					max={3}
					getAriaLabel={() => 'Number of bathrooms'}
					value={value}
					onChange={handleChangeSlider}
					// onChangeCommitted={handleChangeSlider}
					valueLabelDisplay='on'
					valueLabelFormat={(x) => {
						if (x === 3) return `${x}+`;
						return `${x}`;
					}}
				/>
			</Box>
		</>
	);
}
