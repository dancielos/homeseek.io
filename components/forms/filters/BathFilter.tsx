import { BathtubOutlined } from '@mui/icons-material';
import FilterButton from './FilterButton';
import { Box, Slider, Typography } from '@mui/material';
import { useState } from 'react';

export default function BathFilter() {
	const [value, setValue] = useState<number[]>([1, 3]);

	const handleChangeSlider = (event: Event, newValue: number | number[]) => {
		if (!Array.isArray(newValue)) return;
		setValue(newValue as number[]);
	};

	return (
		<FilterButton label='Baths' Icon={<BathtubOutlined />}>
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
					name='price-range'
					sx={{ mx: 6 }}
					min={1}
					max={3}
					getAriaLabel={() => 'Number of bathrooms'}
					value={value}
					onChange={handleChangeSlider}
					valueLabelDisplay='on'
					valueLabelFormat={(x) => {
						if (x === 3) return `${x}+`;
						return `${x}`;
					}}
				/>
			</Box>
		</FilterButton>
	);
}
