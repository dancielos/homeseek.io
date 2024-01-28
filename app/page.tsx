import { ImageList } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SearchBar from '@/components/forms/SearchBar';
import Image from 'next/image';
import Section from '@/components/section/Section';
import CardFeaturedHome from '@/pages/Home/CardFeaturedHome';
import CardCity from '@/pages/Home/CardCity';
import P from '@/components/ui/P';
import H1 from '@/components/ui/H1';
import H2 from '@/components/ui/H2';
import CTA from '@/components/ui/CTA';

import { cards, itemData } from '@/data/constants';
import { relative } from 'path';
import HeroBackground from '@/pages/Home/HeroBackground';

export default function Home() {
	return (
		<>
			<Section
				fullWidth
				variant='custom'
				sx={{
					position: 'relative',
					width: '100vw',
					height: 720,
					padding: '0!important',
				}}
			>
				<HeroBackground />
				<H1
					sx={{
						color: '#fff4e6',
						textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
					}}
				>
					Move in to your next home
				</H1>
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
						<H2>Are you a landlord, property owner, or property manager?</H2>
						<P>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
							minima unde ea ipsam ratione officiis laboriosam culpa, odit
							accusantium? Adipisci ut ipsum quo tempora vitae hic maiores
							provident eligendi dolor?
						</P>
						<CTA>Start listing your property</CTA>
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
