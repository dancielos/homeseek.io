import Overlay from '@/components/ui/Overlay';
import Video from '@/components/ui/Video';
import Image from 'next/image';
import { Suspense } from 'react';

export default function HeroBackground() {
	return (
		<>
			{/* <Overlay /> */}
			<Image
				src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/HomeSeek-hero-fallback-1080p.jpg'
				alt='HomeSeek Hero Image'
				priority
				style={{
					zIndex: -100,
					position: 'absolute',
					width: '100%',
					height: 'auto',
					top: 0,
				}}
				width={1920}
				height={1080}
				objectFit='contain'
			/>
			<Video src='https://homeseek-bucket.s3.ca-central-1.amazonaws.com/homeseek-hero-1080p.mp4' />
		</>
	);
}
