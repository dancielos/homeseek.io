'use client';

import './ImageSlider.css';

import Thumbnails from './thumbnails/Thumbnails';
import {
	Direction,
	ImageSliderContextType,
	NavigationAction,
	TypeImage,
} from './types/types';
import ImageGallery from './gallery/ImageGallery';
import { useContext, useEffect, useRef } from 'react';
// import { scrollTo, setImages } from '../../data/slices/imageSliderSlice';
// import { useDispatch } from 'react-redux';

import DefaultContainer from './containers/DefaultContainer';

import FullscreenContainer from './containers/FullscreenContainer';
import { ImageSliderContext } from './ImageSliderProvider';
// import { AppDispatch, useAppSelector } from '@/data/store';

type ChildProps = {
	images: TypeImage[];
};

export default function Layout({ images }: ChildProps) {
	const thumbnailsRef = useRef() as React.MutableRefObject<
		Map<number, HTMLLIElement>
	>;
	const thumbnailsFRef = useRef() as React.MutableRefObject<
		Map<number, HTMLLIElement>
	>;

	const { currentIndex, len, setImages, scrollTo } = useContext(
		ImageSliderContext
	) as ImageSliderContextType;

	// const currentIndex = useContext(ImageSliderContext) as number;

	// console.log(`from layout.tsx: ${currentIndex}`);
	// const len = 2;
	// const scrollTo = (to: number, direction: Direction) => {};

	// const currentIndex = useAppSelector(
	// 	(state) => state.imageSliderReducer.currentIndex
	// );
	// const len = useAppSelector((state) => state.imageSliderReducer.len);

	useEffect(() => {
		setImages(images);
	}, [images, setImages]);

	function handleScroll(action: NavigationAction, index: number) {
		if (action === 'jump' && currentIndex === index) return;
		let to = -1;
		let direction: 'rtl' | 'ltr' = 'rtl';
		if (action === 'prev') {
			if (index === 0) to = len - 1;
			else to = index - 1;

			direction = 'rtl';
		} else if (action === 'next') {
			if (index === len - 1) to = 0;
			else to = index + 1;

			direction = 'ltr';
		} else {
			to = index;
			if (currentIndex < to) direction = 'ltr';
			else direction = 'rtl';
		}

		scrollTo(to, direction);

		const map = getThumbnailsMap();

		const node = map.get(to);
		node?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}

	function getThumbnailsMap() {
		if (!thumbnailsRef.current) {
			thumbnailsRef.current = new Map();
		}
		return thumbnailsRef.current;
	}

	// The refs should be unique per element
	// Hence, different refs for fullscreen thumbnails
	function getThumbnailsFMap() {
		if (!thumbnailsFRef.current) {
			thumbnailsFRef.current = new Map();
		}
		return thumbnailsFRef.current;
	}

	// ----------------------------------------

	const dialogRef = useRef<HTMLDialogElement>(null);

	function showFullscreen() {
		dialogRef.current?.showModal();
	}

	function hideFullScreen() {
		dialogRef.current?.close();
	}

	return (
		<>
			<DefaultContainer>
				<ImageGallery
					handleScroll={handleScroll}
					handleFullscreen={showFullscreen}
				/>
				<Thumbnails
					handleScroll={handleScroll}
					getMap={getThumbnailsMap}
					ref={thumbnailsRef}
				/>
			</DefaultContainer>
			<FullscreenContainer ref={dialogRef}>
				<ImageGallery
					fullscreen
					handleScroll={handleScroll}
					handleFullscreen={hideFullScreen}
				/>
				<Thumbnails
					fullscreen
					handleScroll={handleScroll}
					getMap={getThumbnailsFMap}
					ref={thumbnailsFRef}
				/>
			</FullscreenContainer>
		</>
	);
}
