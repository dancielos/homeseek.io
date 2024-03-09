import H2 from '@/components/htmlElements/H2';
import H3 from '@/components/htmlElements/H3';
import Section from '@/components/section/Section';
import { BOX_SHADOW } from '@/data/constants';
import TitleBar from '@/pagesLayout/Details/TitleBar';
import { Container, Paper, Skeleton, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function Loading() {
	return (
		<>
			<TitleBar title='Loading...' />
			<Container
				sx={{
					pt: 4,
					pb: 12,
				}}
			>
				<Grid container columns={10} columnSpacing={2} rowSpacing={6}>
					<Grid xs={10} sm={5} md={6}>
						<Stack spacing={4}>
							<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
								<Skeleton variant='rectangular' height={240} />
								<Paper sx={{ p: 2, mt: 2 }} elevation={3}>
									<Skeleton height={80} />
									<Skeleton />
									<Skeleton />
								</Paper>
							</Section>
							<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
								<H2 smaller>Features & Amenities</H2>
								<Skeleton />
								<Skeleton />
								<Skeleton />
							</Section>
							<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
								<H2 smaller>Utilities</H2>
								<Skeleton />
								<Skeleton />
								<Skeleton />
							</Section>
							<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
								<H2 smaller>About</H2>
								<Skeleton />
								<Skeleton />
								<Skeleton />
							</Section>
							<Skeleton variant='rectangular' height={320} />
						</Stack>
					</Grid>
					<Grid xs={10} sm={5} md={4}>
						<Stack
							id='contact-listing'
							data-testid='contact-listing'
							sx={{
								position: 'sticky',
								top: '100px',
								p: 2,
							}}
							bgcolor='primary.light'
							boxShadow={BOX_SHADOW}
						>
							<H3
								sx={{
									fontSize: {
										// xs: '1.5rem',
										sm: '1.4rem',
										md: '2rem',
										fontWeight: 500,
									},
								}}
							>
								Contact Property Owner
							</H3>
							<Skeleton height={48} />
							<Skeleton height={48} />
							<Skeleton height={48} />
							<Skeleton variant='rectangular' height={120} />
							<Skeleton height={48} />
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
