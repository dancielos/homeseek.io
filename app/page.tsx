// 'use client';
// import { testDB } from '@/utils/db';

import { Button, ImageList, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SearchBar from '@/components/forms/SearchBar';
import Image from 'next/image';
import Section from '@/components/section/Section';
import CardFeaturedHome from '@/components/cards/CardFeaturedHome';
import CardCity from '@/components/cards/CardCity';

const cards = [1, 2, 3, 4];

const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
		author: '@bkristastucchio',
		rows: 2,
		cols: 2,
		featured: true,
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
		author: '@rollelflex_graphy726',
	},
	{
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
		author: '@helloimnik',
	},
	{
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
		author: '@nolanissac',
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
		author: '@hjrc33',
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
		author: '@arwinneil',
		rows: 2,
		cols: 2,
		featured: true,
	},
	{
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
		author: '@tjdragotta',
	},
	{
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
		author: '@katie_wasserman',
	},
	{
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
		author: '@silverdalex',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
		author: '@shelleypauls',
	},
	{
		img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
		title: 'Sea star',
		author: '@peterlaster',
	},
	{
		img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
		title: 'Bike',
		author: '@southside_customs',
		cols: 2,
	},
];

export default function Home() {
	// const test = testDB();
	// console.log(test);
	return (
		<>
			<Section
				variant='custom'
				sx={{
					// bgcolor: 'background.paper',
					pt: '20vh',
					pb: 6,
					background:
						'url("https://homeseek-bucket.s3.ca-central-1.amazonaws.com/hero-img.jpg")',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					// backgroundPositionY: 'center',
					minHeight: '90vh',
				}}
				fullWidth
			>
				<Typography
					component='h1'
					variant='h1'
					align='center'
					color='text.primary'
					gutterBottom
				>
					Search your next home
				</Typography>
				<SearchBar />
			</Section>
			<Section title='Featured Homes'>
				<Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 16 }}>
					{cards.map((card) => (
						<Grid key={card} xs={4} sm={4} md={4}>
							<CardFeaturedHome />
						</Grid>
					))}
				</Grid>
			</Section>
			<Section variant='secondary' fullWidth>
				<Grid container xs={10}>
					<Grid xs={8}>
						<Typography component='h2' variant='h2' gutterBottom>
							Are you a landlord, property owner, or property manager?
						</Typography>
						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
							minima unde ea ipsam ratione officiis laboriosam culpa, odit
							accusantium? Adipisci ut ipsum quo tempora vitae hic maiores
							provident eligendi dolor?
						</Typography>
						<Button variant='contained' color='secondary'>
							Start listing your property
						</Button>
					</Grid>
					<Grid xs={2}>
						{/* <Image
							src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/home-no-bg.png'
							alt='house with no background'
							width={500}
							height={250}
						/> */}
					</Grid>
				</Grid>
			</Section>
			<Section title='Popular Cities'>
				<ImageList cols={4}>
					{itemData.map((item) => (
						<CardCity
							img={item.img}
							key={item.img}
							author={item.author}
							title={item.title}
						/>
					))}
				</ImageList>
			</Section>
		</>
	);
}
