import Map from '@/components/core/Map';
import SearchForm from '@/components/forms/SearchForm';

import { AppBar, Button, Container } from '@mui/material';
import Grid, { Grid2Props } from '@mui/material/Unstable_Grid2';
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
				<Grid xs={5}>list here</Grid>
			</Grid>
		</>
		// </Container>
	);
}
