'use client';

// import { handleTextField } from '@/utils/actions';
import {
	Autocomplete,
	Button,
	Stack,
	TextField,
	Tooltip,
	Zoom,
} from '@mui/material';
import CTA from '../ui/CTA';
import {
	ArrowDropDown,
	AttachMoney,
	BathtubOutlined,
	BedOutlined,
	HomeWorkOutlined,
	OtherHousesOutlined,
} from '@mui/icons-material';

type SearchProps = {
	withFilters?: boolean;
};

export default function Search({ withFilters = false }: SearchProps) {
	return (
		<Stack
			component='form'
			direction={{ xs: 'column', sm: 'row' }}
			spacing={2}
			justifyContent='center'
			width={{ xs: '100%', md: withFilters ? 1 : 1 / 2 }}
			margin='auto'
			autoComplete='off'
		>
			<Tooltip
				disableHoverListener
				title='The only cities available with dummy data: Toronto, Montreal, Vancouver, Calgary, Edmonton, Ottawa, Winnipeg, and Red Deer'
				arrow
				TransitionComponent={Zoom}
			>
				<TextField
					id='search-input'
					label='City or Address'
					variant='filled'
					fullWidth
					sx={{
						color: 'primary.main',
						borderColor: '#ffffff',
						backgroundColor: 'rgba(33, 37, 41, 0.8)',
						'& input': {
							color: 'primary.main',
						},
					}}
					focused
				/>
			</Tooltip>
			{withFilters ? (
				<>
					<Button
						variant='contained'
						startIcon={<AttachMoney />}
						endIcon={<ArrowDropDown />}
					>
						Price
					</Button>
					<Button
						variant='contained'
						startIcon={<HomeWorkOutlined />}
						endIcon={<ArrowDropDown />}
					>
						Property Type
					</Button>
					<Button
						variant='contained'
						startIcon={<BedOutlined />}
						endIcon={<ArrowDropDown />}
					>
						Beds
					</Button>
					<Button
						variant='contained'
						startIcon={<BathtubOutlined />}
						endIcon={<ArrowDropDown />}
					>
						Baths
					</Button>
					<Button
						variant='contained'
						startIcon={<OtherHousesOutlined />}
						endIcon={<ArrowDropDown />}
					>
						More
					</Button>
				</>
			) : null}
			<CTA type='button'>Search</CTA>
		</Stack>
	);
}
