import Map from '@/components/client/Map';

import { Box, Card, Typography } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';

import { DUMMY_LISTING, propertyTypesArray } from '@/data/constants';
import Listing from '@/components/core/Listing';
import getCoordsFromCity from '@/utils/server-actions/getCoordsFromCity';
import {
	Coords,
	PROPERTY_TYPE,
	PropertyListing,
	PropertyType,
} from '@/data/types';
import getListings from '@/utils/server-actions/getListings';
import formatAddress from '@/utils/formatAddress';
import getFeaturedListings from '@/utils/server-actions/getFeaturedListings';
import H3 from '@/components/htmlElements/H3';
import InfoBox from '@/components/htmlElements/InfoBox';
import getPins from '@/utils/server-actions/getPins';

// IMPORTANT :
// This page is wrapped in a Grid container,
// so the 'root' element for this component should be
// a <Grid> -> item

type SearchParams = {
	[key: string]: string | string[] | undefined;
};

const fallbacks = {
	city: 'toronto',
	price: '1000,10000',
	beds: '1,6',
	baths: '1,3',
	propertyType: Object.keys(PROPERTY_TYPE).join(',') as string,
	isPetFriendly: true,
};

export default async function Search({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const city = (searchParams.s as string) || fallbacks.city;
	const { lat, lng, bounds } = await getCoordsFromCity(city);
	console.log(bounds, ' from search page');
	const coords = { lat, lng };
	const price = ((searchParams.price as string) || fallbacks.price)
		.split(',')
		.map(Number);
	const beds = ((searchParams.bed as string) || fallbacks.beds)
		.split(',')
		.map(Number);
	const baths = ((searchParams.bath as string) || fallbacks.baths)
		.split(',')
		.map(Number);
	const propertyType = (
		(searchParams.property as string) || fallbacks.propertyType
	).split(',') as PropertyType[];
	const isPetFriendly =
		searchParams.pet === undefined ? undefined : searchParams.pet === 'true';

	// Toronto is the fallback city if it's empty
	// const listings = await getFeaturedListings();

	const listings = await getListings({
		city,
		price,
		beds,
		baths,
		propertyType,
		isPetFriendly,
	});

	const pins = (await getPins(
		listings.map((l) => l.address) as string[],
		coords
	)) as Coords[];

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
				<Map coordinates={coords} pins={pins} bounds={bounds} />
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
					<Typography sx={{ pb: 0, px: 2, pt: 1 }}>
						Showing {listings.length} result{listings.length > 1 ? 's' : ''}.
					</Typography>
					{listings.length === 0 ? (
						<Box
							sx={{
								p: 4,
							}}
						>
							<H3>Error 404: No Listing Found</H3>
							<InfoBox message='The only dummy data I have are from these cities: Toronto, Vancouver, Calgary, Montreal, Ottawa, Edmonton, Quebec City, Lethbridge. Either that, or try changing your filters for a wider search.' />
						</Box>
					) : (
						listings.map((listing, i) => (
							<Listing i={i} key={i} variant='landscape' {...listing} />
						))
					)}
				</Box>
			</Grid>
		</>
	);
}
