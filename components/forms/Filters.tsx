'use client';

import {
	ArrowDropDown,
	AttachMoney,
	BathtubOutlined,
	BedOutlined,
	HomeWorkOutlined,
	OtherHousesOutlined,
} from '@mui/icons-material';
import { ButtonGroup } from '@mui/material';
import FilterButton from './FilterButton';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// import styles from 'Filters.module.css';

export default function Filters() {
	const theme = useTheme();
	const matches1054 = useMediaQuery('(max-width:1054px)');

	return (
		<ButtonGroup
			sx={{
				display: 'flex',
				height: '100%',
				// flex: '0 0 100%',
			}}
			variant='contained'
			disableElevation
		>
			<FilterButton label='Price' Icon={<AttachMoney />} />
			{!matches1054 && (
				<>
					<FilterButton label='Property Type' Icon={<HomeWorkOutlined />} />
					<FilterButton label='Beds' Icon={<BedOutlined />} />
					<FilterButton label='Baths' Icon={<BathtubOutlined />} />
				</>
			)}
			<FilterButton label='More' Icon={<OtherHousesOutlined />} />
		</ButtonGroup>
	);
}
