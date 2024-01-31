'use client';

// import { handleTextField } from '@/utils/actions';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CTA from '../ui/CTA';
import { SearchOutlined } from '@mui/icons-material';
import Filters from './Filters';
import SearchCityTooltip from './SearchCityTooltip';

type SearchFormProps = {
	withFilters?: boolean;
};

export default function SearchForm({ withFilters = false }: SearchFormProps) {
	if (!withFilters) {
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
				<SearchCityTooltip>
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
				</SearchCityTooltip>
				<CTA type='submit'>Search</CTA>
			</Stack>
		);
	}
	return (
		<Grid
			container
			component='form'
			// spacing={2}
			justifyContent='center'
			columns={10}
			// margin='auto'
			autoComplete='off'
		>
			<Grid sm={6} md={4}>
				<SearchCityTooltip>
					<TextField
						id='search-input'
						label='City or Address'
						variant='filled'
						fullWidth
						sx={{
							color: 'primary.main',
							borderColor: '#ffffff',
							backgroundColor: 'rgba(33, 37, 41, 0.8)',
							'& input, & label': {
								color: 'primary.main',
							},
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									{/* <Button
									color='secondary'
									variant='contained'
									endIcon={<SearchOutlined />}
								></Button> */}
									<IconButton color='secondary'>
										<SearchOutlined />
									</IconButton>
								</InputAdornment>
							),
						}}
						// focused
					/>
				</SearchCityTooltip>
			</Grid>
			<Grid xs={'auto'} flexShrink={1}>
				<Filters />
			</Grid>
		</Grid>
	);
}
