'use client';

import Layout from './Layout';
import { TypeImage } from './types/types';

export default function ImageSlider({ images }: { images: TypeImage[] }) {
	return <Layout images={images} />;
}
