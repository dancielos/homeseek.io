import { Dispatch, SetStateAction } from 'react';

export type TypeImage = {
	src: string;
	alt: string;
};

export type Direction = 'ltr' | 'rtl';

export type NavigationAction = 'prev' | 'next' | 'jump';

export type ImageSliderContextType = {
	currentIndex: number;
	images: TypeImage[];
	setImages: Dispatch<SetStateAction<TypeImage[]>>;
	direction: Direction;
	len: number;
	scrollTo: (to: number, direction: Direction) => void;
};
