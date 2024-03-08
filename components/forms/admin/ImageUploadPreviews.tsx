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
import Image from 'next/image';

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
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Image
					src={preview}
					width={120}
					height={120}
					alt={preview}
					style={{
						objectFit: 'cover',
					}}
				/>

				<CardContent>
					<Typography
						variant='subtitle1'
						color='text.secondary'
						component='p'
						sx={{
							wordBreak: 'break-word',
							overflowWrap: 'break-word',
						}}
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
