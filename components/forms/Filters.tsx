import {
	AttachMoney,
	BathtubOutlined,
	BedOutlined,
	HomeWorkOutlined,
	Menu,
	OtherHousesOutlined,
} from '@mui/icons-material';
import { ButtonGroup, IconButton } from '@mui/material';
import FilterButton from './FilterButton';

import styles from './Filters.module.css';

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
				disableElevation
			>
				<FilterButton label='Price' Icon={<AttachMoney />} />
				<FilterButton
					label='Property Type'
					Icon={<HomeWorkOutlined />}
					className={styles['hide-on-smaller-screens']}
				/>
				<FilterButton
					label='Beds'
					Icon={<BedOutlined />}
					className={styles['hide-on-smaller-screens']}
				/>
				<FilterButton
					label='Baths'
					Icon={<BathtubOutlined />}
					className={styles['hide-on-smaller-screens']}
				/>
				<FilterButton label='More' Icon={<OtherHousesOutlined />} />
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
