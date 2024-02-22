'use client';

import { ImageSliderProvider } from './ImageSliderProvider';
import Layout from './Layout';
import { TypeImage } from './types/types';

export default function ImageSlider({ images }: { images: TypeImage[] }) {
	return (
		<ImageSliderProvider>
			<Layout images={images} />
		</ImageSliderProvider>
	);
}
