import Overlay from '@/components/ui/Overlay';
import Video from '@/components/ui/Video';
import Image from 'next/image';
import styles from '@/styles/hero-background.module.css';
// import { Suspense } from 'react';

export default function HeroBackground() {
	return (
		<>
			{/* <Overlay /> */}
			<Image
				src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/HomeSeek-hero-fallback-with-overlay.jpg'
				alt='HomeSeek hero fallback image with overlay'
				priority
				className={styles.image}
				width={1920}
				height={1080}
				objectFit='contain'
			/>
			<Video src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/homeseek-hero-video-with-overlay-1080p.mp4' />
		</>
	);
}
