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

export default function Home() {
	return (
		<>
			<Section
				variant='custom'
				sx={{
					// bgcolor: 'background.paper',
					color: '#fff4e6',
					pt: '20vh',
					pb: 6,
					background:
						'url("https://homeseek-bucket.s3.ca-central-1.amazonaws.com/hero-img2_2560px.jpg")',
					// background:
					// 'url("https://homeseek-bucket.s3.ca-central-1.amazonaws.com/hero-img2_1280px.jpg")',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					// backgroundPositionY: 'center',
					width: '100vw',
					height: 720,
					textShadow: '2px 4px 12px #212529',
				}}
				fullWidth
			>
				<H1>Search your next home</H1>
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
