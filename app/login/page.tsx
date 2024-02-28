import LoginForm from '@/components/forms/login/LoginForm';
import InfoBox from '@/components/htmlElements/InfoBox';
import { Home } from '@mui/icons-material';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

export default function Login() {
	return (
		<Grid container>
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
			>
				<Image
					src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/listing/CONDO_APARTMENT000143.jpg'
					alt='Homeseek Login Image'
					width={1280}
					height={720}
					style={{
						zIndex: -10,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
					priority
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
					<LoginForm />
					<InfoBox message='You can use demo@homeseek.io and password: <Password123!> Make sure to include the exclamation point, but not the angle brackets.' />
				</Box>
			</Grid>
		</Grid>
	);
}
