import { ImageListItem, ImageListItemBar } from '@mui/material';

type cityProp = {
	img: string;
	title: string;
	author: string;
};

export default function CardCity({ img, title, author }: cityProp) {
	return (
		<ImageListItem>
			<img
				srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
				src={`${img}?w=248&fit=crop&auto=format`}
				alt={title}
				loading='lazy'
			/>
			<ImageListItemBar title={title} subtitle={author} />
		</ImageListItem>
	);
}
