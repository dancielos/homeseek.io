import Grid from '@mui/material/Unstable_Grid2';
import { Divider, InputAdornment, Paper, SxProps } from '@mui/material';

import H2 from '@/components/htmlElements/H2';
import ListingTextField from './ListingTextField';
import ListingSelect from './ListingSelect';
import { AVAILABLE_CITIES, PROPERTY_TYPE_OPTIONS } from '@/data/constants';
import { AttachMoney, BedOutlined, ShowerOutlined } from '@mui/icons-material';

const customH2Style: SxProps = {
	fontSize: {
		xs: '1rem',
		md: '1.4rem',
	},
};

export default function AddressBasicDetails() {
	return (
		<Paper elevation={3}>
			<H2 sx={customH2Style}>Address</H2>
			<Grid container spacing={3}>
				<Grid xs={12}>
					<ListingTextField name='street' />
				</Grid>
				<Grid xs={12} md={6}>
					<ListingSelect
						id='cityProvince'
						label='City, Province'
						labelId='city-province-label'
						options={AVAILABLE_CITIES}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<ListingTextField name='postalCode' label='Postal Code' />
				</Grid>
			</Grid>
			<Divider sx={{ my: 2 }} />
			<H2 sx={customH2Style}>Basic Details</H2>
			<Grid container spacing={3}>
				<Grid xs={12} md={6}>
					<ListingSelect
						id='propertyType'
						label='Property Type'
						labelId='property-type-label'
						options={PROPERTY_TYPE_OPTIONS}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<ListingTextField
						name='price'
						type='number'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<AttachMoney />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<ListingTextField
						name='numBedrooms'
						type='number'
						label='# of Bedrooms'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<BedOutlined />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<ListingTextField
						name='numBathrooms'
						type='number'
						label='# of Bathrooms'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<ShowerOutlined />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid xs={12}>
					<ListingTextField
						name='about'
						label='About the listing'
						multiline
						rows={6}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}
