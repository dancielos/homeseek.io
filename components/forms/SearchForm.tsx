'use client';

// import { handleTextField } from '@/utils/actions';
import {
	Autocomplete,
	Button,
	IconButton,
	InputAdornment,
	Stack,
	SxProps,
	TextField,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CTA from '../client/CTA';
import { SearchOutlined } from '@mui/icons-material';
import Filters from './filters/Filters';
import SearchCityTooltip from './SearchCityTooltip';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { getSearchQuery } from '@/utils/getSearchQuery';
import useSearchQuery from '@/hooks/useSearchQuery';
import { CITIES } from '@/data/constants';

type SearchFormProps = {
	withFilters?: boolean;
	sx?: SxProps;
};

export default function SearchForm({
	withFilters = false,
	sx,
}: SearchFormProps) {
	// TODO:
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [searchInput, setSearchInput] = useState<string>(
		searchParams?.get('s') || ''
	);
	const debouncedSearch = useDebounce(searchInput);

	if (pathname !== '/') useSearchQuery('s', '' + debouncedSearch);

	async function submitSearch(formData: FormData) {
		// ONLY for homepage where 'listening' is not important
		// AND where the user needs to explicitly submit the form
		// AND from the homepage, ONLY the 's' will be available
		const searchInput = (formData.get('search-input') as string) || 'toronto';
		const query = getSearchQuery(pathname!, searchInput);
		router.push(query);
	}

	if (!withFilters) {
		return (
			<Stack
				component='form'
				data-testid='search-form'
				id='search-form'
				direction={{ xs: 'column', sm: 'row' }}
				spacing={2}
				justifyContent='center'
				width={{ xs: '100%', md: 1 / 2 }}
				margin='auto'
				autoComplete='off'
				action={submitSearch}
			>
				<Autocomplete
					disablePortal
					options={CITIES}
					sx={{ width: 300 }}
					renderInput={(params) => (
						<TextField
							{...params}
							type='search'
							id='search-input'
							name='search-input'
							label='City'
							variant='filled'
							fullWidth
							focused
							sx={sx ? { ...sx } : {}}
							required
						/>
					)}
				/>

				<CTA
					type='submit'
					id='search-submit'
					component={Button}
					// LinkComponent={Link}
					// href='/search'
				>
					Search
				</CTA>
			</Stack>
		);
	}
	return (
		<Grid
			container
			component='form'
			data-testid='search-form'
			id='search-form'
			// spacing={2}
			justifyContent='center'
			columns={10}
			// margin='auto'
			// action={submitSearch}
			action={() => {}}
			autoComplete='off'
		>
			<Grid xs={6} xm={7} sm={6} md={4}>
				{/* <SearchCityTooltip> */}
				<Autocomplete
					disablePortal
					options={CITIES}
					value={searchInput}
					onChange={(
						event: SyntheticEvent<Element, Event>,
						newValue: string | null
					) => {
						setSearchInput((newValue as string) || '');
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							type='search'
							id='search-input'
							name='search-input'
							label='City'
							fullWidth
							variant='filled'
							sx={{
								color: 'primary.main',
								'& input, & label': {
									color: 'primary.main',
								},
							}}
						/>
					)}
				/>
			</Grid>
			<Grid xs={'auto'} flexShrink={1}>
				<Filters />
			</Grid>
		</Grid>
	);
}
