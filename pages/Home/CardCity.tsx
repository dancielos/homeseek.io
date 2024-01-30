import {
	ImageListItem,
	ImageListItemBar,
	ImageListItemProps,
} from '@mui/material';
import Image from 'next/image';

type cityProp = {
	img: string;
	item: ImageListItemProps;
	i: number;
};

export default function CardCity({ item, img, i }: cityProp) {
	return (
		<ImageListItem
			cols={i % 3 === 0 ? 2 : 1}
			rows={i % 3 === 0 ? 2 : 1}
			sx={{
				alignItems: 'end',
			}}
		>
			<Image
				src={img}
				alt={item.title || 'test'}
				width={640}
				height={360}
				style={{
					width: '100%',
					height: 'auto',
				}}
				// fill
				// style={{
				// 	objectFit: 'contain',
				// 	width: '100%',
				// }}
			/>
			<ImageListItemBar title={item.title} />
		</ImageListItem>
	);
}
