import { Typography } from '@mui/material';

export default function H1({ children }: { children: React.ReactNode }) {
	return (
		<Typography component='h1' variant='h1'>
			{children}
		</Typography>
	);
}
