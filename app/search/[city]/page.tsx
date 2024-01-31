import Map from '@/components/core/Map';
import SearchForm from '@/components/forms/SearchForm';

import { AppBar, Box } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';

import { DUMMY_LISTING } from '@/data/constants';
import Listing from '@/components/core/Listing';

export default function Search() {
	return (
		// <Container>
		<>
			<AppBar
				position='relative'
				// color='#fff4e6'
				sx={{
					bgcolor: '#fff4e69e',
					boxShadow: 'none',
					py: {
						xs: 1,
						sm: 2,
					},
					display: {
						// xs: 'none',

						sm: 'inherit',
					},
				}}
				elevation={0}
			>
				<SearchForm withFilters />
			</AppBar>
			<Grid container columns={10}>
				<Grid
					xs={0}
					sm={5}
					sx={{
						display: {
							xs: 'hidden',
						},
					}}
				>
					<Map />
				</Grid>
				<Grid
					xs={10}
					sm={5}
					sx={{
						minHeight: '480px',
						maxHeight: {
							xs: '90vh',
							sm: '80vh',
						},
						overflowY: 'scroll',
						overflowX: 'hidden',
					}}
				>
					<Box rowGap={1} display='flex' flexDirection='column' padding={1}>
						{DUMMY_LISTING.map((dummy_list, i) => (
							<Listing key={i} variant='landscape' {...dummy_list} />
						))}
					</Box>
				</Grid>
			</Grid>
		</>
		// </Container>
	);
}
