import Grid from '@mui/material/Unstable_Grid2';

import H1 from '@/components/htmlElements/H1';
import SearchBar from '@/components/forms/SearchBar';

import HeroBackground from './HeroBackground';

export default function SectionHero() {
	return (
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
	);
}
