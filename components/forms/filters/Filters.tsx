import { ButtonGroup } from '@mui/material';
import FilterButton from './FilterButton';

import styles from './Filters.module.css';
import PriceFilter from './PriceFilter';
import PropertyTypeFilter from './PropertyTypeFilter';
import BedsFilter from './BedsFilter';
import BathFilter from './BathFilter';
import MoreFilter from './MoreFilter';
import AllFilter from './AllFilter';

export default function Filters() {
	return (
		<>
			<ButtonGroup
				sx={{
					display: {
						xs: 'none',
						md: 'flex',
					},
					height: '100%',
				}}
				className={styles['hide-on-smaller-screens']}
				variant='contained'
				data-testid='filters-container'
				disableElevation
			>
				<PriceFilter />
				<PropertyTypeFilter />
				<BedsFilter />
				<BathFilter />
				<MoreFilter />
			</ButtonGroup>
			<ButtonGroup
				sx={{
					display: {
						xs: 'flex',
						md: 'none',
					},
					height: '100%',
				}}
				className={styles['show-on-smaller-screens']}
				variant='contained'
				disableElevation
			>
				<AllFilter />
			</ButtonGroup>
		</>
	);
}
