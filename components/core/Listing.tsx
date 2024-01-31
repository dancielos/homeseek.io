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
		<Card className={styles[`card-${variant}`]}>
			{/* <CardHeader sx={{ , minHeight: 128 }}></CardHeader> */}
			<CardContent
				className={styles[`card-content-${variant}`]}
				// sx={variant === 'landscape' ? { display: 'flex' } : { p: 0 }}
			>
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
						marginY: 'auto',
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
				<Container
					sx={
						variant === 'landscape'
							? { display: 'flex', flexDirection: 'column' }
							: {}
					}
				>
					<Typography
						component='p'
						variant={variant === 'landscape' ? 'body1' : 'h6'}
						sx={{ lineHeight: 1, pb: 2 }}
					>
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
					{variant === 'portrait' ? <Divider sx={{ mb: 2 }} /> : null}
					<Typography
						variant='h5'
						gutterBottom
						textAlign={variant === 'landscape' ? 'left' : 'right'}
						order={-1}
					>
						${rest.price} CAD
					</Typography>
					{variant === 'landscape' ? (
						<CardActions sx={{ justifyContent: 'flex-end' }}>
							<CTA>More details</CTA>
						</CardActions>
					) : null}
				</Container>
			</CardContent>
			{variant === 'portrait' ? (
				<CardActions sx={{ m: 1, justifyContent: 'flex-end' }}>
					<CTA>More details</CTA>
				</CardActions>
			) : null}
		</Card>
	);
}
