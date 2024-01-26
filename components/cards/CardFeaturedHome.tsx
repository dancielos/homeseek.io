import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Container,
	Divider,
	IconButton,
	Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Image from 'next/image';
import { relative } from 'path';

export default function CardFeaturedHome() {
	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			{/* <CardHeader sx={{ , minHeight: 128 }}></CardHeader> */}
			<CardContent sx={{ flexGrow: 1, p: 0 }}>
				<Container sx={{ position: 'relative', minHeight: 128 }}>
					<Image
						// component='div'
						// sx={{
						// 16:9
						// pt: '56.25%',
						// }}
						src='https://source.unsplash.com/random?wallpapers'
						alt='Lorem ipsum'
						fill
					/>
				</Container>
				<Container>
					<Typography gutterBottom component='strong'>
						Residential
					</Typography>
					<Typography>
						222 Truant Crescent, Red Deer, Alberta, T4P 0S8
					</Typography>
					<Typography variant='h4' gutterBottom>
						$419,900 CAD
					</Typography>
					<Divider />
					<Box sx={{ display: 'flex' }}>
						<Typography>4 bedrooms</Typography>
						<Typography>2 bathrooms</Typography>
					</Box>
				</Container>
			</CardContent>

			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
