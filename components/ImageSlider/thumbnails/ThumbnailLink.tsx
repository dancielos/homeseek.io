import { ReactNode, forwardRef, useContext } from 'react';
import { ImageSliderContextType, NavigationAction } from '../types/types';
import { useAppSelector } from '@/data/store';
import { ImageSliderContext } from '../ImageSliderProvider';

type ChildProps = {
	i: number;
	children: ReactNode;
	handleScroll: (action: NavigationAction, index: number) => void;
};
const ThumbnailLink = forwardRef<HTMLLIElement, ChildProps>(
	function ThumbnailLink({ children, handleScroll, i }, ref) {
		const { currentIndex } = useContext(
			ImageSliderContext
		) as ImageSliderContextType;

		function handleThumbnailClick(index: number) {
			handleScroll('jump', index);
		}

		return (
			<li
				className={`relative h-36 min-w-36 sm:h-24 sm:min-w-24  duration-300 ${
					currentIndex === i ? 'border-4 border-orange-300' : ''
				}`}
				ref={ref}
			>
				<button
					className='block relative h-full w-full'
					onClick={() => handleThumbnailClick(i)}
				>
					{children}
				</button>
			</li>
		);
	}
);
export default ThumbnailLink;
