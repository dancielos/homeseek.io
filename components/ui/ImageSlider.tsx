import Image from 'next/image';

export default function ImageSlider() {
	return (
		<Image
			src='https://source.unsplash.com/random?wallpapers'
			alt='what'
			// alt={`${rest.address} Property`}
			width={1280}
			height={270}
			style={{
				width: '100%',
				height: 'auto',
			}}
			// className={styles['card-img']}
		/>
	);
}
