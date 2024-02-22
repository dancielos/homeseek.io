import { ReactNode, createContext, useState } from 'react';
import { Direction, ImageSliderContextType, TypeImage } from './types/types';

export const ImageSliderContext = createContext<ImageSliderContextType | null>(
	null
);

export function ImageSliderProvider({ children }: { children: ReactNode }) {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [images, setImages] = useState<TypeImage[]>([]);
	const [direction, setDirection] = useState<Direction>('ltr');

	const len = images.length;

	function scrollTo(to: number, direction: Direction) {
		const isActionValid = to >= 0 && to < len;

		if (isActionValid) {
			setCurrentIndex(to);
			setDirection(direction);
		} else {
			console.error('Something went wrong');
		}
	}

	const value = {
		currentIndex,
		images,
		setImages,
		direction,
		len,
		scrollTo,
	};

	return (
		<ImageSliderContext.Provider value={value}>
			{children}
		</ImageSliderContext.Provider>
	);
}
