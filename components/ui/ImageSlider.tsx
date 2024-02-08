import Image from 'next/image';

export default function ImageSlider({ images }: { images: string[] }) {
	// TODO
	// actually create a slider
	//
	const image = images[Math.trunc(Math.random() * 3)];
	return (
		<Image
			src={`${process.env.S3_URL}/${image}`}
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
