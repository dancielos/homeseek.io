// 'use client';

import {
	Button,
	Divider,
	IconButton,
	Stack,
	SxProps,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import HomeIcon from '@mui/icons-material/Home';
import CTA from '@/components/ui/CTA';
import { Facebook, Instagram, LinkedIn, X, YouTube } from '@mui/icons-material';

import styles from './Footer.module.css';
import { BOX_SHADOW } from '@/data/constants';
// import emotionStyled from '@emotion/styled';

// PROS of this emotionStyled approach
// CSS will have intellisense and type protection
// Dynamic styling will be easier
//    For instance, if disabled I can simply change
//    the style property instead of class
// Resolves the issue of using !important in CSS modules
//
// CONS
// it requires that client component even when it's
//   technically static
// the whole js re-compiles so it's slow

// In conclusion, I like using css modules since
// it separates the logic and the design
// tho when using material UI framework,
// styled components may be better
// -> but the fact that it will turn a static server component
// to a client component is a deal-breaker for me.

// const FooterStyle = emotionStyled(Grid)<Grid2Props>((props) => ({
// 	backgroundColor: '#fff4e6',
// 	paddingTop: '4rem',
// 	paddingBottom: '2rem',
// 	px: {
// 		xs: 4,
// 		// sm: 6,
// 		lg: 20,
// 	},
// 	boxShadow: BOX_SHADOW,
// }));

export default function Footer() {
	return (
		<Grid
			sx={{
				bgcolor: '#fff4e6',
				py: 6,
				px: {
					xs: 4,
					// sm: 6,
					lg: 20,
				},
				boxShadow: BOX_SHADOW,
			}}
			// flexDirection='column'
			component='footer'
			container
			columns={{
				xs: 6,
				md: 5,
			}}
			justifyContent='space-between'
			// columnSpacing={1}
			// gap={1}
			// columnGap={1}
			rowGap={4}
		>
			<Grid
				md={2}
				justifyContent='center'
				px={{
					sm: 5,
				}}
			>
				<Stack
					flexDirection='row'
					justifyContent='center'
					alignItems='center'
					sx={{
						pb: 2,
					}}
				>
					<HomeIcon
						sx={{
							mr: {
								xs: 0.2,
								sm: 1,
							},

							// filter: 'drop-shadow(0px 0px 12px #fd7e14)',
						}}
						// color='secondary'
						fontSize='large'
					/>
					<Typography
						variant='h4'
						component='h5'
						// color='secondary'
						sx={{
							flexGrow: 0,
							fontWeight: 700,
							// filter: 'drop-shadow(0px 0px 12px #fd7e14)',
						}}
					>
						HomeSeek
					</Typography>
				</Stack>
				<Typography
					textAlign='center'
					sx={{
						px: {
							xs: 0,
							sm: 12,
							md: 0,
						},
					}}
				>
					Your ultimate destination for effortlessly discovering rental
					properties and effortlessly listing your own.
				</Typography>
				<Stack flexDirection='row' justifyContent='space-around'>
					<IconButton className={styles['icon-button']}>
						<Facebook />
					</IconButton>
					<IconButton className={styles['icon-button']}>
						<Instagram />
					</IconButton>
					<IconButton className={styles['icon-button']}>
						<LinkedIn />
					</IconButton>
					<IconButton className={styles['icon-button']}>
						<X />
					</IconButton>
					<IconButton className={styles['icon-button']}>
						<YouTube />
					</IconButton>
				</Stack>
			</Grid>

			<Grid xs={6} sm={2} md={1} justifyContent='stretch'>
				<Typography
					component='h6'
					variant='h6'
					textAlign={{
						xs: 'center',
						sm: 'inherit',
					}}
				>
					Landlords
				</Typography>
				<ul className={`${styles.ul} ${styles['ul-center']}`}>
					<li>
						<CTA>List your property</CTA>
					</li>
					<li>Login</li>
					<li>Sign up</li>
					<li>Support</li>
				</ul>
			</Grid>
			<Grid xs={3} sm={2} md={1} px={{ xs: 0, sm: 2 }}>
				<Typography component='h6' variant='h6'>
					Popular Locations
				</Typography>
				<ul className={styles.ul}>
					<li>Toronto</li>
					<li>Vancouver</li>
					<li>Calgary</li>
					<li>Edmonton</li>
					<li>Quebec</li>
					<li>Montreal</li>
					<li>Ottawa</li>
				</ul>
			</Grid>
			<Grid xs={3} sm={2} md={1} px={{ xs: 0, sm: 2 }}>
				<Typography component='h6' variant='h6'>
					Company
				</Typography>
				<ul className={styles.ul}>
					<li>About us</li>
					<li>Blog</li>
					<li>Contact</li>
					<li>Careers</li>
					<li>Terms of Service</li>
					<li>Privacy Policy</li>
					<li>FAQs</li>
				</ul>
			</Grid>
			<Grid md={5}>
				<Divider />
				<Typography
					textAlign='center'
					fontStyle='italic'
					sx={{
						width: {
							sm: 'inherit',
							md: '80%',
						},
						p: 2,
						mx: 'auto',
					}}
				>
					HomeSeek is a notable rental property web app developed by{' '}
					<a href='https://dancielos.com/' target='_blank'>
						Dan Cielos
					</a>
					, providing insight into his abilities as a software engineer. Please
					note that while the addresses are sourced from public records for
					Google Maps integration, the rental listings themselves are randomized
					and entirely fictional.
				</Typography>
			</Grid>
		</Grid>
	);
}
