import Grid from '@mui/material/Unstable_Grid2';
import { Box, Skeleton, Stack, Typography } from '@mui/material';

export default function Loading() {
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
				<Skeleton
					sx={{ bgcolor: 'grey.900', width: '100%', height: '100%' }}
					variant='rectangular'
					animation='wave'
				/>
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
					<Typography sx={{ pb: 0, px: 2, pt: 1 }}>Loading...</Typography>

					{[0, 1, 2, 4].map((loadCard, i) => (
						<Stack flexDirection='row' gap={2}>
							<Skeleton
								animation='wave'
								variant='rectangular'
								width={180}
								height={120}
							/>
							<Stack sx={{ width: '100%' }}>
								<Skeleton animation='wave' variant='text' />
								<Skeleton animation='wave' variant='text' />
								<Skeleton animation='wave' variant='text' />
								<Skeleton animation='wave' variant='text' />
							</Stack>
						</Stack>
					))}
				</Box>
			</Grid>
		</>
	);
}
