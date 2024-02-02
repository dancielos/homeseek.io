import { Home } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

export default function Logo() {
	return (
		<Button
			component='div'
			sx={{
				color: '#212529',
			}}
			// className={styles['link']}
			size='large'
			startIcon={<Home />}
		>
			<Typography
				variant='h5'
				sx={{ fontWeight: 700, textTransform: 'capitalize' }}
			>
				HomeSeek
			</Typography>
		</Button>
	);
}
