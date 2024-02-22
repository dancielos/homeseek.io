import ImageIndex from './ImageIndex';
import { ImageSliderContextType, NavigationAction } from '../types/types';
import FullscreenButton from './FullscreenButton';
import NavControls from './NavControls';
import { useContext } from 'react';
import { ImageSliderContext } from '../ImageSliderProvider';

type ChildProps = {
	handleFullscreen: (action: 'open' | 'close') => void;
	handleScroll: (action: NavigationAction, index: number) => void;
	fullscreen?: boolean;
};

export default function Controls({
	handleScroll,
	handleFullscreen,
	fullscreen,
}: ChildProps) {
	const { currentIndex, len } = useContext(
		ImageSliderContext
	) as ImageSliderContextType;

	return (
		<>
			<div className='absolute top-0 w-full'>
				<div className='flex justify-between p-3 items-start'>
					<ImageIndex currentIndex={currentIndex} len={len} />
					<FullscreenButton
						onToggleFullScreen={handleFullscreen}
						isFullscreen={fullscreen}
					/>
				</div>
			</div>
			<NavControls handleScroll={handleScroll} />
		</>
	);
}
