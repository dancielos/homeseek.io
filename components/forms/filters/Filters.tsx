import {
	AttachMoney,
	BathtubOutlined,
	BedOutlined,
	HomeWorkOutlined,
	OtherHousesOutlined,
} from '@mui/icons-material';
import { Box, ButtonGroup, Popover, Slider, Typography } from '@mui/material';
import FilterButton from './FilterButton';

import styles from './Filters.module.css';
import { MouseEvent, useState } from 'react';
import PriceFilter from './PriceFilter';
import PropertyTypeFilter from './PropertyTypeFilter';
import BedsFilter from './BedsFilter';
import BathFilter from './BathFilter';
import MoreFilter from './MoreFilter';

export default function Filters() {
	return (
		<>
			<ButtonGroup
				sx={{
					display: {
						xs: 'none',
						sm: 'flex',
					},
					height: '100%',
					// flex: '0 0 100%',
				}}
				variant='contained'
				data-testid='filters-container'
				disableElevation
			>
				<PriceFilter />
				<PropertyTypeFilter styles={styles} />
				<BedsFilter styles={styles} />
				<BathFilter styles={styles} />
				<MoreFilter />
			</ButtonGroup>
			<ButtonGroup
				sx={{
					display: {
						xs: 'flex',
						sm: 'none',
					},
					height: '100%',
				}}
				variant='contained'
				disableElevation
			>
				<FilterButton label='Filters' />
			</ButtonGroup>
		</>
	);
}
