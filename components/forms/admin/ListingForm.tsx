'use client';

import H2 from '@/components/htmlElements/H2';
import {
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	Paper,
	SxProps,
	styled,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CTA from '../../client/CTA';
import { CloudUpload } from '@mui/icons-material';
import Agreement from './Agreement';

import AddressBasicDetails from './AddressBasicDetails';
import FeaturesAmenitiesUtilities from './FeaturesAmenitiesUtilities';

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
				<AddressBasicDetails />
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
				<FeaturesAmenitiesUtilities />
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
