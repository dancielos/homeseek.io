import { Delete } from '@mui/icons-material';
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';

export default function ImageUploadPreviews({
	name,
	preview,
	i,
	handleDeleteImage,
}: {
	name: string;
	preview: string;
	i: number;
	handleDeleteImage: (i: number) => void;
}) {
	return (
		<Card sx={{ width: '100%' }} key={i}>
			<Box sx={{ display: 'flex', flexDirection: 'row' }}>
				<CardMedia
					component='img'
					sx={{ width: 120 }}
					image={preview}
					alt='Live from space album cover'
				/>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography
						variant='subtitle1'
						color='text.secondary'
						component='div'
					>
						{name}
					</Typography>
				</CardContent>
				<CardActions
					sx={{
						justifySelf: 'end',
					}}
				>
					<IconButton aria-label='delete' onClick={() => handleDeleteImage(i)}>
						<Delete />
					</IconButton>
				</CardActions>
			</Box>
		</Card>
	);
}
