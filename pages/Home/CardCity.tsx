import { City } from '@/data/types';
import {
	ImageListItem,
	ImageListItemBar,
	ImageListItemProps,
} from '@mui/material';
import Image from 'next/image';

import styles from './CardCity.module.css';

type cityProp = ImageListItemProps & {
	item: City;
	i: number;
};

export default function CardCity({
	item = { img: '', title: '' }, //necessary for build time
	i,
}: cityProp) {
	return (
		<ImageListItem
			cols={i % 3 === 0 ? 2 : 1}
			rows={i % 3 === 0 ? 2 : 1}
			className={styles['img-container']}
		>
			<Image
				src={item.img}
				alt={item.title || 'test'}
				width={640}
				height={360}
				className={styles['img']}
			/>
			<ImageListItemBar title={item.title} />
		</ImageListItem>
	);
}
