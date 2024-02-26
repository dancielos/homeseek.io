'use client';

import { ImageSliderProvider } from './ImageSliderProvider';
import Layout from './Layout';
import { TypeImage } from './types/types';

type ChildProps = {
	images: TypeImage[];
	showThumbnail?: boolean;
	autoHeight?: boolean;
};

export default function ImageSlider({
	images,
	showThumbnail = true,
	autoHeight = false,
}: ChildProps) {
	return (
		<ImageSliderProvider>
			<Layout images={images} showThumbnail={showThumbnail} autoHeight />
		</ImageSliderProvider>
	);
}
