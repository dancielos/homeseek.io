import { InfoOutlined } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';

export default function InfoBox({
	message = 'Something went wrong.',
}: {
	message?: string;
}) {
	return (
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
			<Typography variant='body2'>{message}</Typography>
		</Paper>
	);
}
