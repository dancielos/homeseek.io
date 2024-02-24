import { Box, Slider, Typography } from '@mui/material';
import { useState } from 'react';

export default function BedsFilter() {
	const [value, setValue] = useState<number[]>([1, 6]);

	const handleChangeSlider = (event: Event, newValue: number | number[]) => {
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
		</>
	);
}
