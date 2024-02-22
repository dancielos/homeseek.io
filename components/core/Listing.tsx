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

interface ListingProps extends PropertyListing {
	size?: 'sm' | 'md' | 'lg';
	variant?: 'landscape' | 'portrait';
	i: number;
}

// TODO: refactor the code so it's cleaner
//       both on portrait and landscape versions

const images = [
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/golden-retriever-puppies-1280-720px.jpg',
		alt: 'Golden Retriever Puppies',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/border-collie-854x623px.jpg',
		alt: 'Border Collie',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/cheddar-1920-1080px.jpg',
		alt: 'Cheddar the Dog',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/hachiko-1366-768px.jpg',
		alt: 'Hachiko lookalike',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/husky-1000-1500px.jpg',
		alt: 'Husky Dog',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/squishy-dog-700-668px.jpg',
		alt: 'Adorable Squishy Dog',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/stella-1600-900px.jpg',
		alt: 'Stella the Dog',
	},
	{
		src: 'https://image-slider-sample.s3.ca-central-1.amazonaws.com/hachiko-1366-768px.jpg',
		alt: 'Hachiko lookalike',
	},
];

export default function Listing({
	size = 'sm',
	variant = 'portrait',
	i = 0,
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
						mb: 2,
					}}
				>
					<ImageSlider images={images} showThumbnail={false} />
					{/* <Image
						src='https://source.unsplash.com/random?wallpapers'
						alt={`${rest.address} Property`}
						width={640}
						height={320}
						className={styles['card-img']}
					/> */}
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
							<DetailsLink
								data-testid={`more-details-${i}`}
								href='/listing/something'
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
						href='/listing/something'
						data-testid={`more-details-${i}`}
					>
						More details
					</DetailsLink>
				</CardActions>
			)}
		</Card>
	);
}
