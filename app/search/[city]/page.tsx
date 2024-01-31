import Map from '@/components/core/Map';
import SearchForm from '@/components/forms/SearchForm';

import { AppBar } from '@mui/material';
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
					py: 2,
					display: {
						xs: 'none',
						sm: 'inherit',
					},
				}}
				elevation={0}
			>
				<SearchForm withFilters />
			</AppBar>
			<Grid container columns={10}>
				<Grid xs={5}>
					<Map />
				</Grid>
				<Grid
					xs={5}
					sx={{
						maxHeight: '80vh',
						overflowY: 'scroll',
					}}
				>
					<Listing {...DUMMY_LISTING[0]} />
					<Listing {...DUMMY_LISTING[1]} />
					<Listing {...DUMMY_LISTING[2]} />
					<Listing {...DUMMY_LISTING[3]} />
				</Grid>
			</Grid>
		</>
		// </Container>
	);
}
