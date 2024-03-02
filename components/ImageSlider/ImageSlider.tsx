'use client';

import { ImageSliderProvider } from './ImageSliderProvider';
import Layout from './Layout';
import { TypeImage } from './types/types';

type ChildProps = {
	images: TypeImage[];
	showThumbnail?: boolean;
	autoHeight?: boolean;
	customHeight?: number | undefined;
};

export default function ImageSlider({
	images,
	showThumbnail = true,
	autoHeight = false,
	customHeight,
}: ChildProps) {
	return (
		<ImageSliderProvider>
			<Layout
				images={images}
				showThumbnail={showThumbnail}
				autoHeight={autoHeight}
				customHeight={customHeight}
			/>
		</ImageSliderProvider>
	);
}
