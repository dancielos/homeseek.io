import {
	Card,
	CardActions,
	CardContent,
	Container,
	Divider,
	Stack,
	Typography,
} from '@mui/material';

import Image from 'next/image';
import { PROPERTY_TYPE, PropertyListing } from '@/data/types';
import CTA from '../ui/CTA';
import {
	BathtubOutlined,
	KingBedOutlined,
	MapsHomeWorkOutlined,
} from '@mui/icons-material';
import IconText from '../ui/IconText';

import styles from './Listing.module.css';

interface ListingProps extends PropertyListing {
	size?: 'sm' | 'md' | 'lg';
	variant?: 'landscape' | 'portrait';
}

export default function Listing({
	size = 'sm',
	variant = 'portrait',
	...rest
}: ListingProps) {
	return (
		<Card className={styles.card}>
			{/* <CardHeader sx={{ , minHeight: 128 }}></CardHeader> */}
			<CardContent sx={{ p: 0 }}>
				<Container
					sx={{
						position: 'relative',
						width: 'auto',
						aspectRatio: 16 / 8,
						paddingLeft: {
							xs: 0,
						},
						paddingRight: {
							xs: 0,
						},
						paddingBottom: 1,
					}}
				>
					<Image
						src='https://source.unsplash.com/random?wallpapers'
						alt={`${rest.address} Property`}
						width={640}
						height={320}
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>
				</Container>
				<Container>
					<Typography component='p' variant='h6' sx={{ lineHeight: 1, pb: 2 }}>
						{rest.address}
					</Typography>
					<Stack direction='row' useFlexGap flexWrap='wrap' columnGap={2}>
						<IconText
							Icon={KingBedOutlined}
							text={`${rest.bedrooms} bedrooms`}
						/>
						<IconText
							Icon={BathtubOutlined}
							text={`${rest.bathrooms} bathrooms`}
						/>
						<IconText
							Icon={MapsHomeWorkOutlined}
							text={PROPERTY_TYPE[rest.propertyType]}
						/>
					</Stack>
					<Divider sx={{ mb: 2 }} />
					<Typography variant='h5' gutterBottom textAlign='right'>
						${rest.price} CAD
					</Typography>
				</Container>
			</CardContent>
			<CardActions sx={{ m: 1, justifyContent: 'flex-end' }}>
				<CTA>More details</CTA>
			</CardActions>
		</Card>
	);
}
