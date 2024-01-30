import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';

import Section from '@/components/section/Section';
import H2 from '@/components/ui/H2';
import Underline from '@/components/ui/Underline';
import P from '@/components/ui/P';
import CTA from '@/components/ui/CTA';

import styles from './SectionCta.module.css';

export default function SectionCta() {
	return (
		<Section
			variant='custom'
			sx={{
				px: '0!important',
				paddingTop: {
					sm: 12,
					md: 24,
				},
				position: 'relative',
				marginLeft: {
					lg: 0,
				},
				marginRight: {
					lg: 0,
				},
				minWidth: {
					lg: '100vw',
				},
			}}
		>
			<Container
				sx={{
					bgcolor: 'primary.main',
					padding: '0!important;',
					minWidth: {
						lg: '100vw',
					},
				}}
				maxWidth='xl'
			>
				<Grid
					container
					columns={10}
					sx={{
						position: 'relative',
						justifyContent: { xl: 'flex-end' },
						gap: {
							xl: 24,
						},
					}}
				>
					<Grid
						xs={10}
						sm={6}
						md={7}
						lg={8}
						sx={{
							padding: 4,
							zIndex: 10,
							maxWidth: {
								xl: '60%',
							},
						}}
					>
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
					<Grid xs={10} sm={4} md={3} lg={2} sx={{ position: 'inherit' }}>
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
	);
}
