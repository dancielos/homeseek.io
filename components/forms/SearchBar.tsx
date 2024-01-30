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

type SearchBarProps = {
	withFilters?: boolean;
};

export default function SearchBar({ withFilters = false }: SearchBarProps) {
	return (
		<Stack
			component='form'
			direction={{ xs: 'column', sm: 'row' }}
			spacing={2}
			justifyContent='center'
			width={{ xs: '100%', md: 1 / 2 }}
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
			<CTA type='submit'>Search</CTA>
		</Stack>
	);
}
