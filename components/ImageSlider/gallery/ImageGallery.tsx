import {
	ImageSliderContextType,
	NavigationAction,
	TypeImage,
} from '../types/types';
import ImageGalleryItem from './ImageGalleryItem';

import styles from './ImageGallery.module.css';
import Controls from '../controls/Controls';
import { useAppSelector } from '@/data/store';
import { useContext } from 'react';
import { ImageSliderContext } from '../ImageSliderProvider';

type ChildProps = {
	fullscreen?: boolean;
	handleScroll: (action: NavigationAction, index: number) => void;
	handleFullscreen: () => void;
};

export default function ImageGallery({
	fullscreen,
	handleScroll,
	handleFullscreen,
}: ChildProps) {
	const { currentIndex, direction, images } = useContext(
		ImageSliderContext
	) as ImageSliderContextType;

	return (
		<div
			className={`container relative ${
				fullscreen ? 'h-4/5 min-w-full' : 'h-[360px] w-full'
			}  overflow-hidden`}
		>
			<div className=' relative h-full w-full' id='gallery'>
				{images.map((image, i) => (
					<ImageGalleryItem
						key={image.alt + i}
						image={image}
						id={`#image-${i}`}
						fullscreen={fullscreen}
						className={`${
							currentIndex === i
								? direction === 'ltr'
									? styles['left-to-right']
									: styles['right-to-left']
								: 'invisible'
						} `}
					/>
				))}
			</div>
			<Controls
				fullscreen={fullscreen}
				handleScroll={handleScroll}
				handleFullscreen={handleFullscreen}
			/>
		</div>
	);
}
