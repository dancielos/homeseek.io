import Grid from '@mui/material/Unstable_Grid2';
import {
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputAdornment,
	Radio,
	RadioGroup,
} from '@mui/material';

import H2 from '@/components/htmlElements/H2';
import ListingTextField from './ListingTextField';
import ListingSelect from './ListingSelect';
import {
	AVAILABLE_CITIES,
	AVAILABLE_CITIES_OPTION,
	PROPERTY_TYPE_OPTIONS,
	customH2Style,
} from '@/data/constants';
import { AttachMoney, BedOutlined, ShowerOutlined } from '@mui/icons-material';
import FormContainer from './FormContainer';
import { InputData } from './ListingForm';

export default function AddressBasicDetails({
	invalidInputs = [],
	data,
}: {
	invalidInputs: string[];
	data?: InputData;
}) {
	return (
		<FormContainer title='Address'>
			<Grid container spacing={3}>
				<Grid xs={12}>
					<ListingTextField name='street' defaultValue={data?.street ?? ''} />
				</Grid>
				<Grid xs={12} md={6}>
					<ListingSelect
						error={invalidInputs.includes('cityProvince')}
						id='cityProvince'
						label='City, Province'
						labelId='city-province-label'
						options={AVAILABLE_CITIES_OPTION}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<ListingTextField
						name='postalCode'
						label='Postal Code'
						error={invalidInputs.includes('postalCode')}
						defaultValue={data?.postalCode ?? ''}
					/>
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
						error={invalidInputs.includes('propertyType')}
						options={PROPERTY_TYPE_OPTIONS}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<ListingTextField
						name='price'
						type='number'
						error={invalidInputs.includes('price')}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<AttachMoney />
								</InputAdornment>
							),
						}}
						defaultValue={data?.price ?? ''}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<ListingTextField
						name='numBedrooms'
						type='number'
						label='# of Bedrooms'
						error={invalidInputs.includes('numBedrooms')}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<BedOutlined />
								</InputAdornment>
							),
						}}
						defaultValue={data?.numBedrooms ?? ''}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<ListingTextField
						name='numBathrooms'
						error={invalidInputs.includes('numBathrooms')}
						type='number'
						label='# of Bathrooms'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<ShowerOutlined />
								</InputAdornment>
							),
						}}
						defaultValue={data?.numBathrooms ?? ''}
					/>
				</Grid>
				<Grid
					xs={12}
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 2,
					}}
				>
					<FormLabel id='demo-controlled-radio-buttons-group'>
						Is Pet Friendly?
					</FormLabel>
					<RadioGroup
						aria-labelledby='demo-controlled-radio-buttons-group'
						name='isPetFriendly'
						aria-required='true'
						// value={value}
						// onChange={handleChange}
						defaultValue={data?.isPetFriendly ?? 'yes'}
						sx={{
							// display: 'flex',
							flexDirection: 'row',
						}}
					>
						<FormControlLabel
							value='yes'
							required
							control={<Radio color='secondary' />}
							label='Yes'
						/>
						<FormControlLabel
							required
							value='no'
							control={<Radio color='secondary' />}
							label='No'
						/>
					</RadioGroup>
				</Grid>
				<Grid xs={12}>
					<ListingTextField
						name='about'
						label='About the listing'
						multiline
						error={invalidInputs.includes('about')}
						rows={6}
						defaultValue={data?.about ?? ''}
					/>
				</Grid>
			</Grid>
		</FormContainer>
	);
}
