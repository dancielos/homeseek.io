import { Typography } from '@mui/material';

export default function SectionTitle({
	title,
	isCentered,
}: {
	title: string;
	isCentered: boolean;
}) {
	return (
		<Typography
			component='h2'
			variant='h2'
			textAlign={isCentered ? 'center' : 'inherit'}
		>
			{title}
		</Typography>
	);
}
