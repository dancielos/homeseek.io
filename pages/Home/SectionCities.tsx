import Section from '@/components/section/Section';
import { ImageList } from '@mui/material';
import CardCity from './CardCity';

import styles from './SectionCities.module.css';

import { itemData } from '@/data/constants';

export default function SectionCities() {
	return (
		<Section title='Explore Popular Cities'>
			<ImageList cols={4} variant='quilted' className={styles['cities-grid']}>
				{itemData.map((item, i) => (
					<CardCity i={i} item={item} img={item.img} key={item.img} />
				))}
			</ImageList>
		</Section>
	);
}
