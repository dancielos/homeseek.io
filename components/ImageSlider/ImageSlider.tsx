'use client';

import { ImageSliderProvider } from './ImageSliderProvider';
import Layout from './Layout';
import { TypeImage } from './types/types';

type ChildProps = {
	images: TypeImage[];
	showThumbnail: boolean;
};

export default function ImageSlider({
	images,
	showThumbnail = true,
}: ChildProps) {
	return (
		<ImageSliderProvider>
			<Layout images={images} showThumbnail={showThumbnail} />
		</ImageSliderProvider>
	);
}
