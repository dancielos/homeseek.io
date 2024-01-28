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
import { PROPERTY_TYPE, PropertyListing } from '@/data/types';
import CTA from '../ui/CTA';

interface CardListingProps extends PropertyListing {
	size?: 'sm' | 'md' | 'lg';
	variant?: 'landscape' | 'portrait';
}

export default function CardListing({
	size = 'sm',
	variant = 'portrait',
	...rest
}: CardListingProps) {
	return (
		<Card>
			{/* <CardHeader sx={{ , minHeight: 128 }}></CardHeader> */}
			<CardContent sx={{ p: 0 }}>
				<Container
					sx={{ position: 'relative', width: 'auto', aspectRatio: 16 / 8 }}
				>
					<Image
						// component='div'
						// sx={{
						// 16:9
						// pt: '56.25%',
						// }}
						src='https://source.unsplash.com/random?wallpapers'
						alt='Lorem ipsum'
						fill
						style={{}}
					/>
				</Container>
				<Container>
					<Typography gutterBottom component='strong'>
						{PROPERTY_TYPE[rest.propertyType]}
					</Typography>
					<Typography>{rest.address}</Typography>
					<Typography variant='h4' gutterBottom>
						${rest.price} CAD
					</Typography>
					<Divider />
					<Box sx={{ display: 'flex' }}>
						<Typography>{rest.bedrooms} bedrooms</Typography>
						<Typography>{rest.bathrooms} bathrooms</Typography>
					</Box>
				</Container>
			</CardContent>

			<CardActions disableSpacing>
				<CTA>More details</CTA>
			</CardActions>
		</Card>
	);
}
