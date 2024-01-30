import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import HomeIcon from '@mui/icons-material/Home';
import CTA from '@/components/ui/CTA';

export default function Footer() {
	return (
		<Grid
			sx={{
				bgcolor: '#fff4e6',
				py: 6,
				px: {
					xs: 4,
					// sm: 6,
					lg: 20,
				},
			}}
			// flexDirection='column'
			component='footer'
			container
			columns={5}
			justifyContent='space-between'

			// columnSpacing={1}
			// gap={1}
			// columnGap={1}
		>
			<Grid md={2} justifyContent='center' px={5}>
				<Stack flexDirection='row' justifyContent='center' alignItems='center'>
					<HomeIcon
						sx={{
							mr: {
								xs: 0.2,
								sm: 1,
							},
						}}
					/>
					<Typography
						variant='h4'
						component='h5'
						sx={{ flexGrow: 0, fontWeight: 700 }}
					>
						HomeSeek
					</Typography>
				</Stack>
				<Typography textAlign='center'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quaerat
					ab minima deserunt cumque. Alias quibusdam a maiores laborum aliquid
					nisi voluptatibus esse cumque obcaecati quam, provident modi quas
					quos?
				</Typography>
			</Grid>

			<Grid md={1} justifyContent='stretch'>
				<Typography component='h6' variant='h6'>
					Landlords
				</Typography>
				<ul>
					<li>
						<CTA>List your property</CTA>
					</li>
					<li>Login</li>
					<li>Sign up</li>
					<li>Support</li>
				</ul>
			</Grid>
			<Grid md={2} px={2}>
				<Typography component='h6' variant='h6'>
					Popular Locations
				</Typography>
			</Grid>
			<Grid md={5}>
				<Typography textAlign='center'>Something Something</Typography>
			</Grid>
		</Grid>
	);
}
