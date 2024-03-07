import FormContainer from '@/components/forms/admin/FormContainer';
import H2 from '@/components/htmlElements/H2';
import { customH2Style } from '@/data/constants';
import { Divider, Skeleton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function Loading() {
	return (
		<Grid container columns={10} spacing={1}>
			<Grid xs={10} md={5}>
				<FormContainer title='Address'>
					<Skeleton width='100%' height='100%' />
					<Skeleton width='100%' height='100%' />
					<Skeleton width='100%' height='100%' />
					<Skeleton width='100%' height='100%' />
					<Divider sx={{ my: 2 }} />
					<H2 sx={customH2Style}>Basic Details</H2>
					<Skeleton width='100%' height='100%' />
					<Skeleton width='100%' height='100%' />
					<Skeleton width='100%' height='100%' />
				</FormContainer>
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
				<FormContainer title='Features and Amenities'>
					<Skeleton width='100%' />
					<Skeleton width='100%' />
					<Skeleton width='100%' />
					<Divider sx={{ my: 3 }} />
					<H2 sx={customH2Style}>Utilities Included</H2>
					<Skeleton width='100%' />
					<Skeleton width='100%' />
					<Skeleton width='100%' />
				</FormContainer>
			</Grid>
			<Grid xs={10}>
				<FormContainer title='Images'>
					<Skeleton width='100%' height='100%' />
					<Skeleton width='100%' height='100%' />
					<Skeleton width='100%' height='100%' />
				</FormContainer>
			</Grid>
			<Grid xs={10}>{/* <Agreement /> */}</Grid>
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
				{/* <Button color='warning' size='small' variant='outlined'>
					Delete
				</Button>
				<CTA type='submit'>Save / Update Property</CTA> */}
			</Grid>
		</Grid>
	);
}
