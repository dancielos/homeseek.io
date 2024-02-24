'use client';

// import { handleTextField } from '@/utils/actions';
import {
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
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

type SearchFormProps = {
	withFilters?: boolean;
	sx?: SxProps;
};

export default function SearchForm({
	withFilters = false,
	sx,
}: SearchFormProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [searchInput, setSearchInput] = useState<string>(
		searchParams?.get('s') || ''
	);
	const debouncedSearch = useDebounce(searchInput);

	function updateSearchQuery(searchValue: string) {
		const path = pathname === '/' ? '/search' : '';

		let queryParams = `s=${searchValue}`;
		router.push(`${path}?${queryParams}`);
	}

	useEffect(() => {
		if (pathname !== '/') updateSearchQuery(debouncedSearch);
	}, [debouncedSearch, updateSearchQuery]);

	async function submitSearch(formData: FormData) {
		// ONLY for homepage where 'listening' is not important
		// AND where the user needs to explicitly submit the form
		updateSearchQuery(formData.get('search-input') as string);
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
				<SearchCityTooltip>
					<TextField
						type='search'
						id='search-input'
						name='search-input'
						label='City or Address'
						variant='filled'
						fullWidth
						focused
						sx={sx ? { ...sx } : {}}
					/>
				</SearchCityTooltip>
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
				<SearchCityTooltip>
					<TextField
						id='search-input'
						type='search'
						label='City or Address'
						name='search-input'
						variant='filled'
						fullWidth
						onChange={(e) => setSearchInput(e.target.value)}
						value={searchInput}
						sx={{
							color: 'primary.main',
							// borderColor: '#ffffff',
							// backgroundColor: 'rgba(33, 37, 41, 0.8)',
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
									<IconButton color='secondary' type='submit'>
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
