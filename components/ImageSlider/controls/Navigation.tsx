import { ReactNode, useContext } from 'react';
import { ImageSliderContextType, NavigationAction } from '../types/types';
import { ImageSliderContext } from '../ImageSliderProvider';

type ChildProps = {
	direction: NavigationAction;
	children: ReactNode;
	handleScroll: (action: NavigationAction, index: number) => void;
};

export default function Navigation({
	direction,
	children,
	handleScroll,
}: ChildProps) {
	const { currentIndex } = useContext(
		ImageSliderContext
	) as ImageSliderContextType;

	function handleNavClick(directionParam: NavigationAction) {
		handleScroll(directionParam, currentIndex);
	}

	return (
		<button
			className='px-2 hover:bg-slate-800/30 duration-300'
			onClick={() => handleNavClick(direction)}
		>
			{children}
		</button>
	);
}
