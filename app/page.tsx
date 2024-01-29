import { Container, ImageList } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SearchBar from '@/components/forms/SearchBar';
import Image from 'next/image';
import Section from '@/components/section/Section';
import CardCity from '@/pages/Home/CardCity';
import P from '@/components/ui/P';
import H1 from '@/components/ui/H1';
import H2 from '@/components/ui/H2';
import CTA from '@/components/ui/CTA';

import { itemData } from '@/data/constants';
import HeroBackground from '@/pages/Home/HeroBackground';
import Bento from '@/layouts/Bento';
import Underline from '@/components/ui/Underline';

import styles from '@/styles/landlord-cta.module.css';

export default function Home() {
	return (
		<>
			<Grid
				container
				component='section'
				sx={{
					position: 'relative',
					width: '100vw',
					aspectRatio: {
						xs: 9 / 10,
						sm: 16 / 9,
						md: 16 / 7,
					},
					paddingX: '0!important',
					overflow: 'hidden',
				}}
				alignContent='center'
				justifyContent='center'
				alignItems='center'
				direction='column'
				columns={12}
				flexWrap='nowrap'
			>
				<HeroBackground />
				<Grid xs={12} md={10} lg={12}>
					<H1
						sx={{
							color: '#fff4e6',
							zIndex: 100,
							textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
							fontSize: {
								xs: '3rem',
								sm: '4rem',
								md: '6rem',
							},
						}}
					>
						Move in to your new home
					</H1>
				</Grid>

				<Grid xs={10} sm={6} md={10} lg={10}>
					<SearchBar />
				</Grid>
			</Grid>
			<Section title='Featured Homes' alignTitleCenter>
				<Bento data='test' />
			</Section>
			<Section
				variant='custom'
				fullWidth
				sx={{
					px: '0!important',
					paddingTop: {
						// xs: 12,
						sm: 12,
						md: 24,
					},
					position: 'relative',
				}}
			>
				<Container
					sx={{
						bgcolor: 'primary.main',
						padding: '0!important',
						// py: {
						// 	xs: '2rem',
						// 	sm: '1.4rem',
						// },
					}}
				>
					<Grid container columns={10} sx={{ position: 'relative' }}>
						<Grid xs={10} sm={6} md={7} sx={{ padding: 4, zIndex: 10 }}>
							<H2>
								Own a property? List it here for <Underline>maximum</Underline>{' '}
								exposure!
							</H2>
							<P className={styles.paragraph}>
								Expand your reach and boost your rental income by listing your
								property with us. Our platform offers unparalleled visibility,
								connecting your property with a vast pool of potential tenants.
								Whether you're a seasoned landlord or new to property ownership,
								take advantage of our platform's powerful exposure to find the
								perfect renters.
							</P>
							<CTA>Start listing your property</CTA>
						</Grid>
						<Grid xs={10} sm={4} md={3} sx={{ position: 'inherit' }}>
							<Image
								src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/condo-building-no-background.png'
								alt='house with no background'
								width={598}
								height={987}
								className={styles.image}
							/>
						</Grid>
					</Grid>
				</Container>
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
