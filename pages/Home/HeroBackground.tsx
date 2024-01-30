// import { Suspense } from 'react';

import Overlay from '@/components/ui/Overlay';
// import Video from '@/components/ui/Video';
import Image from 'next/image';
import styles from './HeroBackground.module.css';
import Video from '@/components/ui/Video';
// import dynamic from 'next/dynamic';

// const LazyVideo = dynamic(() => import('@/components/ui/Video'));

export default function HeroBackground() {
	return (
		<>
			{/* <Overlay /> */}
			{/* <Suspense
				fallback={
					<Image
						src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/HomeSeek-hero-fallback-with-overlay.jpg'
						alt='HomeSeek hero fallback image with overlay'
						priority
						className={styles.image}
						width={1920}
						height={1080}
						objectFit='contain'
					/>
				}
			>
				<LazyVideo src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/homeseek-hero-video-with-overlay-1080p.mp4' />
			</Suspense> */}

			<Image
				src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/HomeSeek-hero-fallback-with-overlay.jpg'
				alt='HomeSeek hero fallback image with overlay'
				priority
				className={styles.image}
				width={1920}
				height={1080}
				// objectFit='contain'
			/>

			<Video src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/homeseek-hero-video-with-overlay-1080p.mp4' />
		</>
	);
}