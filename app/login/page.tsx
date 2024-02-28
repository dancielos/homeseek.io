import CTA from '@/components/client/CTA';
import InfoBox from '@/components/htmlElements/InfoBox';
import { Home } from '@mui/icons-material';
import { Avatar, Box, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

export default function Login() {
	return (
		<Grid
			container
			// sx={
			// 	{
			// height: { xs: '92vh', sm: '90vh', md: '100vh' },
			// 	}
			// }
		>
			<Grid
				xs={false}
				sm={4}
				md={7}
				sx={{
					position: 'relative',
					width: 'auto',
					aspectRatio: 16 / 8,
					overflow: 'hidden',
					height: '94vh',
					display: {
						xs: 'none',
						sm: 'flex',
					},
				}}
				// sx={{
				// 	backgroundImage:
				// 		'url(https://source.unsplash.com/random?wallpapers)',
				// 	backgroundRepeat: 'no-repeat',
				// 	// backgroundColor: (t) =>
				// 	// 	t.palette.mode === 'light'
				// 	// 		? t.palette.grey[50]
				// 	// 		: t.palette.grey[900],
				// 	backgroundSize: 'cover',
				// 	backgroundPosition: 'center',
				// }}
			>
				<Image
					src='https://source.unsplash.com/random?wallpapers'
					alt='Homeseek Login Image'
					width={1280}
					height={720}
					style={{
						zIndex: -10,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						// objectPosition: 'center',
					}}
				/>
			</Grid>
			<Grid xs={12} sm={8} md={5}>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 4,
					}}
				>
					<Stack flexDirection='row' gap={2} alignItems='center'>
						<Avatar variant='rounded'>
							<Home />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign in
						</Typography>
					</Stack>
					<Box
						component='form'
						noValidate
						// onSubmit={handleSubmit}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'stretch',
							width: '100%',
							maxWidth: '480px',
							gap: 2,
						}}
					>
						<TextField
							required
							fullWidth
							variant='filled'
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
						/>
						<TextField
							variant='filled'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						{/* <FormControlLabel
								control={<Checkbox value='remember' color='primary' />}
								label='Remember me'
							/> */}
						<CTA type='submit' href='/dashboard' fullWidth>
							Sign In
						</CTA>
					</Box>
					<InfoBox message='You can use demo@homeseek.io and password Password123!' />
				</Box>
			</Grid>
		</Grid>
	);
}
