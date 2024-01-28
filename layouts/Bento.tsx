import CardListing from '@/components/core/CardListing';
import Grid from '@mui/material/Unstable_Grid2';

import { DUMMY_LISTING } from '@/data/constants';

export default function Bento({ data }: { data: string }) {
	return (
		<Grid container spacing={4} columns={16}>
			{/* {cards.map((card, i) => ( */}
			<Grid xs={16} sm={16} md={10}>
				<CardListing {...DUMMY_LISTING[0]} />
			</Grid>
			<Grid xs={16} sm={8} md={6}>
				<CardListing {...DUMMY_LISTING[1]} />
			</Grid>
			<Grid xs={16} sm={8} md={6}>
				<CardListing {...DUMMY_LISTING[2]} />
			</Grid>
			<Grid xs={16} sm={16} md={10}>
				<CardListing {...DUMMY_LISTING[2]} />
			</Grid>
			{/* ))} */}
		</Grid>
	);
}
