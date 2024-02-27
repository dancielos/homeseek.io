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

import {
	BathtubOutlined,
	KingBedOutlined,
	MapsHomeWorkOutlined,
} from '@mui/icons-material';
import IconText from '../ui/IconText';

import styles from './Listing.module.css';
import DetailsLink from '@/components/ui/DetailsLink';
import ImageSlider from '../ImageSlider/ImageSlider';
import { Listing } from '@/models/Listing';
import { TypeImage } from '../ImageSlider/types/types';
import formatPrice from '@/utils/formatPrice';

interface ListingProps extends PropertyListing {
	size?: 'sm' | 'md' | 'lg';
	variant?: 'landscape' | 'portrait';
	i: number;
}

export default function Listing({
	size = 'sm',
	variant = 'portrait',
	i = 0,
	...rest
}: ListingProps) {
	// console.log('from Listing component: ' + address);
	const isLandscape = variant === 'landscape';
	const images: TypeImage[] = rest.img.map((src, i) => ({
		src: `https://homeseek-bucket.s3.ca-central-1.amazonaws.com/${src}`,
		alt: `${rest.address}-${i}`,
	}));
	const price = formatPrice(rest.price);
	// console.log(images);

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
						width: '100%',
						height: '100%',

						paddingLeft: {
							xs: 0,
						},
						paddingRight: {
							xs: 0,
						},
						paddingBottom: 1,
						mb: 2,
					}}
				>
					<ImageSlider images={images} showThumbnail={false} autoHeight />
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
						{price}
					</Typography>
					{isLandscape ? (
						<CardActions sx={{ justifyContent: 'flex-end', px: 0 }}>
							<DetailsLink
								data-testid={`more-details-${i}`}
								href={`/listing/${rest.id}`}
							>
								More details
							</DetailsLink>
						</CardActions>
					) : null}
				</Container>
			</CardContent>
			{isLandscape ? null : (
				<CardActions sx={{ m: 1, justifyContent: 'flex-end' }}>
					<DetailsLink
						href={`/listing/${rest.id}`}
						data-testid={`more-details-${i}`}
					>
						More details
					</DetailsLink>
				</CardActions>
			)}
		</Card>
	);
}
