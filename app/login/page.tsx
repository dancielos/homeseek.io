import CTA from '@/components/client/CTA';
import { InfoOutlined } from '@mui/icons-material';
import { Box, Paper, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

export default function Login() {
	return (
		<Grid
			container
			sx={
				{
					// height: { xs: '92vh', sm: '90vh', md: '100vh' },
				}
			}
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
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
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
						<CTA type='submit' fullWidth>
							Sign In
						</CTA>
					</Box>
					<Paper
						elevation={2}
						sx={{
							width: '100%',
							mt: 2,
							display: 'flex',
							gap: 1,
							alignItems: 'center',
						}}
					>
						<InfoOutlined />
						<Typography variant='body2'>
							You can use demo@homeseek.io and password Password123!
						</Typography>
					</Paper>
				</Box>
			</Grid>
		</Grid>
	);
}
