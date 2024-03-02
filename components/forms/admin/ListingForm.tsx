'use client';

import H2 from '@/components/htmlElements/H2';
import H3 from '@/components/htmlElements/H3';
import {
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	InputAdornment,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	SxProps,
	TextField,
	styled,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CTA from '../../client/CTA';
import {
	AttachMoney,
	BedOutlined,
	CloudUpload,
	MapsHomeWork,
	Shower,
	ShowerOutlined,
} from '@mui/icons-material';
import InfoBox from '@/components/htmlElements/InfoBox';
import Agreement from './Agreement';

const customH2Style: SxProps = {
	fontSize: {
		xs: '1rem',
		md: '1.4rem',
	},
};

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
});

export default function ListingForm({
	id = 'new-property-form',
}: {
	id: string;
}) {
	return (
		<Grid container columns={10} spacing={1} component='form' id={id}>
			<Grid xs={10} md={5}>
				<Paper elevation={3}>
					<H2 sx={customH2Style}>Address</H2>
					<Grid container spacing={3}>
						<Grid xs={12}>
							<TextField
								required
								id='street'
								name='street'
								label='Street'
								variant='outlined'
								color='secondary'
								fullWidth
							/>
						</Grid>
						<Grid xs={12} md={6}>
							<TextField
								required
								id='cityProvince'
								name='cityProvince'
								label='City, Province'
								fullWidth
								variant='outlined'
								color='secondary'
							/>
						</Grid>
						<Grid xs={12} md={6}>
							<TextField
								required
								id='postalCode'
								name='postalCode'
								label='Postal Code'
								fullWidth
								variant='outlined'
								color='secondary'
							/>
						</Grid>
					</Grid>
					<Divider sx={{ my: 2 }} />
					<H2 sx={customH2Style}>Basic Details</H2>
					<Grid container spacing={3}>
						<Grid xs={12} md={6}>
							<FormControl fullWidth variant='outlined'>
								<InputLabel id='demo-simple-select-label'>
									Property Type
								</InputLabel>
								<Select
									variant='outlined'
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									// value={age}
									label='Property Type'
									color='secondary'
									// onChange={handleChange}
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid xs={12} md={6}>
							<TextField
								type='number'
								variant='outlined'
								required
								name='lastName'
								id='outlined-start-adornment'
								label='Price'
								color='secondary'
								fullWidth
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
							<TextField
								type='number'
								variant='outlined'
								required
								name='lastName'
								id='outlined-start-adornment'
								label='# of Bedrooms'
								color='secondary'
								fullWidth
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
							<TextField
								type='number'
								variant='outlined'
								required
								name='lastName'
								id='outlined-start-adornment'
								label='# of Bathrooms'
								fullWidth
								color='secondary'
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
							<TextField
								type='number'
								variant='outlined'
								required
								name='lastName'
								id='outlined-start-adornment'
								label='About the listing'
								fullWidth
								color='secondary'
								multiline
								rows={6}
							/>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid
				xs={10}
				md={5}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
				}}
			>
				<Paper elevation={3}>
					<H2 sx={customH2Style}>Features and Amenities</H2>

					<FormControlLabel required control={<Checkbox />} label='Required' />
					<FormControlLabel
						required
						control={<Checkbox />}
						label='Pet Friendly'
					/>
					<FormControlLabel required control={<Checkbox />} label='Something' />
					<FormControlLabel required control={<Checkbox />} label='Required' />
					<FormControlLabel
						required
						control={<Checkbox />}
						label='Pet Friendly'
					/>
					<FormControlLabel required control={<Checkbox />} label='Something' />

					<Divider sx={{ my: 2 }} />
					<H2 sx={customH2Style}>Utilities Included</H2>
					<FormControlLabel
						required
						control={<Checkbox />}
						label='Dishwasher'
					/>
					<FormControlLabel
						required
						control={<Checkbox />}
						label='Laundry machine'
					/>
					<FormControlLabel
						required
						control={<Checkbox />}
						label='Oven range'
					/>
				</Paper>
				<Paper elevation={3}>
					<H2 sx={customH2Style}>Images</H2>
					<Button
						component='label'
						variant='contained'
						startIcon={<CloudUpload />}
					>
						Upload file
						<VisuallyHiddenInput type='file' />
					</Button>
				</Paper>
			</Grid>

			<Grid xs={10}>
				<Agreement />
			</Grid>
			<Grid
				xs={10}
				sx={{
					mt: 1,
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: {
						xs: 'column',
						xm: 'row',
					},
					gap: 2,
				}}
			>
				<Button color='warning' size='small' variant='outlined'>
					Delete
				</Button>
				<CTA type='submit'>Save / Update Property</CTA>
			</Grid>
		</Grid>
	);
}
