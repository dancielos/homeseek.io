import Listing from '@/components/core/Listing';
import Grid from '@mui/material/Unstable_Grid2';

import { DUMMY_LISTING } from '@/data/constants';

export default function Bento({ data }: { data: string }) {
	return (
		<Grid container spacing={4} columns={16} justifyContent='center'>
			{/* {cards.map((card, i) => ( */}
			<Grid xs={16} sm={9} md={9}>
				<Listing {...DUMMY_LISTING[0]} />
			</Grid>
			<Grid xs={16} sm={7} md={5} alignSelf='end'>
				<Listing {...DUMMY_LISTING[1]} />
			</Grid>
			<Grid xs={16} sm={7} md={5}>
				<Listing {...DUMMY_LISTING[2]} />
			</Grid>
			<Grid xs={16} sm={9} md={8}>
				<Listing {...DUMMY_LISTING[2]} />
			</Grid>
			{/* ))} */}
		</Grid>
	);
}
