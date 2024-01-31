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

// TODO: refactor the code so it's cleaner
//       both on portrait and landscape versions

export default function Listing({
	size = 'sm',
	variant = 'portrait',
	...rest
}: ListingProps) {
	const isLandscape = variant === 'landscape';
	return (
		<Card className={styles[`card-${variant}`]}>
			<CardContent
				className={styles[`card-content-${variant}`]}
				sx={
					isLandscape
						? {
								paddingX: {
									sm: 0,
								},
						  }
						: {}
				}
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
						// marginY: 'auto',
					}}
				>
					<Image
						src='https://source.unsplash.com/random?wallpapers'
						alt={`${rest.address} Property`}
						width={640}
						height={320}
						className={styles['card-img']}
					/>
				</Container>
				<Container
					sx={
						isLandscape
							? {
									display: 'flex',
									flexDirection: 'column',
									px: {
										sm: 2,
									},
							  }
							: {}
					}
				>
					<Typography
						component='p'
						variant={isLandscape ? 'body1' : 'h6'}
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
					{isLandscape ? null : <Divider sx={{ mb: 2 }} />}
					<Typography
						variant='h5'
						gutterBottom
						textAlign={isLandscape ? 'left' : 'right'}
						order={-1}
					>
						${rest.price} CAD
					</Typography>
					{isLandscape ? (
						<CardActions sx={{ justifyContent: 'flex-end', px: 0 }}>
							<CTA>More details</CTA>
						</CardActions>
					) : null}
				</Container>
			</CardContent>
			{isLandscape ? null : (
				<CardActions sx={{ m: 1, justifyContent: 'flex-end' }}>
					<CTA>More details</CTA>
				</CardActions>
			)}
		</Card>
	);
}
