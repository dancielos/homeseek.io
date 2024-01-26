import { Typography } from '@mui/material';

export default function SectionTitle({ title }: { title: string }) {
	return (
		<Typography component='h2' variant='h2' gutterBottom>
			{title}
		</Typography>
	);
}
