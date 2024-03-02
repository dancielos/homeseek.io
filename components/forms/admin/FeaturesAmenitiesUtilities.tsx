import H2 from '@/components/htmlElements/H2';
import {
	Checkbox,
	Divider,
	FormControlLabel,
	Paper,
	SxProps,
} from '@mui/material';

const customH2Style: SxProps = {
	fontSize: {
		xs: '1rem',
		md: '1.4rem',
	},
};

export default function FeaturesAmenitiesUtilities() {
	return (
		<Paper elevation={3}>
			<H2 sx={customH2Style}>Features and Amenities</H2>

			<FormControlLabel required control={<Checkbox />} label='Required' />
			<FormControlLabel required control={<Checkbox />} label='Pet Friendly' />
			<FormControlLabel required control={<Checkbox />} label='Something' />
			<FormControlLabel required control={<Checkbox />} label='Required' />
			<FormControlLabel required control={<Checkbox />} label='Pet Friendly' />
			<FormControlLabel required control={<Checkbox />} label='Something' />

			<Divider sx={{ my: 2 }} />
			<H2 sx={customH2Style}>Utilities Included</H2>
			<FormControlLabel required control={<Checkbox />} label='Dishwasher' />
			<FormControlLabel
				required
				control={<Checkbox />}
				label='Laundry machine'
			/>
			<FormControlLabel required control={<Checkbox />} label='Oven range' />
		</Paper>
	);
}
