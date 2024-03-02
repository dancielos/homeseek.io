import Listing from '@/components/core/Listing';
import { FeaturedListing } from '@/utils/server-actions/getFeaturedListings';
import Grid from '@mui/material/Unstable_Grid2';

export default function Bento({
	listings = [],
}: {
	listings: FeaturedListing[];
}) {
	// console.log(listings[0].id);
	return (
		<Grid container spacing={4} columns={16} justifyContent='center'>
			{listings.length > 0 ? (
				<>
					<Grid xs={16} sm={9} md={9} alignSelf='end'>
						<Listing i={0} {...listings[0]} />
					</Grid>
					<Grid xs={16} sm={7} md={5} alignSelf='end'>
						<Listing i={1} {...listings[1]} />
					</Grid>
					<Grid xs={16} sm={7} md={5} alignSelf='start'>
						<Listing i={2} {...listings[2]} />
					</Grid>
					<Grid xs={16} sm={9} md={8} alignSelf='start'>
						<Listing i={3} {...listings[3]} />
					</Grid>
				</>
			) : null}
		</Grid>
	);
}
