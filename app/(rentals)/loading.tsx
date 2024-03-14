import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
	return (
		<Box
			sx={{
				minHeight: '90vh',
			}}
		>
			<CircularProgress
				sx={{
					position: 'fixed',
					top: '50%',
					left: '50%',
					/* bring your own prefixes */
					transform: 'translate(-50%, -50%)',
				}}
				color='secondary'
			/>
		</Box>
	);
}
