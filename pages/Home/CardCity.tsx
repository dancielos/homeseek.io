import {
	ImageListItem,
	ImageListItemBar,
	ImageListItemProps,
} from '@mui/material';
import Image from 'next/image';

type cityProp = {
	img: string;
	item: ImageListItemProps;
};

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function CardCity({ item, img }: cityProp) {
	return (
		// <ImageListItem>
		// 	<img
		// 		srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
		// 		src={`${img}?w=248&fit=crop&auto=format`}
		// 		alt={title}
		// 		loading='lazy'
		// 	/>
		// 	<ImageListItemBar title={title} subtitle={author} />
		// </ImageListItem>
		<ImageListItem cols={item.cols || 1} rows={item.rows || 1}>
			<Image
				{...srcset(img, 180, item.rows, item.cols)}
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
		</ImageListItem>
	);
}
