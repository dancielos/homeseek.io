import Map from '@/components/client/Map';

import { Box } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';

import { DUMMY_LISTING } from '@/data/constants';
import Listing from '@/components/core/Listing';
import getCoordsFromCity from '@/utils/server-actions/getCoordsFromCity';
import { Coords } from '@/data/types';

// IMPORTANT :
// This page is wrapped in a Grid container,
// so the 'root' element for this component should be
// a <Grid> -> item

type SearchParams = {
	[key: string]: string | string[] | undefined;
};

export default async function Search({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const coords = (await getCoordsFromCity(searchParams.s as string)) as Coords;
	console.log(coords);
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
				<Map coordinates={coords} />
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
