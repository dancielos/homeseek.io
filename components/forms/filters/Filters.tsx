import { ButtonGroup } from '@mui/material';
import FilterButton from './FilterButton';

import styles from './Filters.module.css';
import PriceFilter from './PriceFilter';
import PropertyTypeFilter from './PropertyTypeFilter';
import BedsFilter from './BedsFilter';
import MoreFilter from './MoreFilter';
import AllFilter from './AllFilter';
import {
	AttachMoney,
	BathtubOutlined,
	BedOutlined,
	HomeWorkOutlined,
	OtherHousesOutlined,
} from '@mui/icons-material';
import BathFilter from './BathFilter';

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
				<FilterButton
					buttonId='filter-button__price'
					label='Price'
					Icon={<AttachMoney />}
				>
					<PriceFilter />
				</FilterButton>
				<FilterButton
					buttonId='filter-button__property'
					label='Property Type'
					Icon={<HomeWorkOutlined />}
				>
					<PropertyTypeFilter />
				</FilterButton>
				<FilterButton
					buttonId='filter-button__bed'
					label='Beds'
					Icon={<BedOutlined />}
				>
					<BedsFilter />
				</FilterButton>
				<FilterButton
					buttonId='filter-button__bath'
					label='Baths'
					Icon={<BathtubOutlined />}
				>
					<BathFilter />
				</FilterButton>
				<FilterButton
					buttonId='filter-button__more'
					label='More'
					Icon={<OtherHousesOutlined />}
				>
					<MoreFilter />
				</FilterButton>
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
