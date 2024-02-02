import Map from '@/components/core/Map';

import { Box } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';

import { DUMMY_LISTING } from '@/data/constants';
import Listing from '@/components/core/Listing';

// IMPORTANT :
// This page is wrapped in a Grid container,
// so the 'root' element for this component should be
// a <Grid> -> item

export default function Search() {
	return (
		<>
			<Grid
				xs={0}
				sm={5}
				sx={{
					display: {
						xs: 'hidden',
						sm: 'block',
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
						<Listing i={i} key={i} variant='landscape' {...dummy_list} />
					))}
				</Box>
			</Grid>
		</>
	);
}
