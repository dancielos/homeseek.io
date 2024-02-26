'use client';

import GoogleMapReact from 'google-map-react';
import styles from './Map.module.css';
// import { useMediaQuery } from '@mui/material';
// import { Suspense } from 'react';

export default function Map({
	coordinates,
}: {
	coordinates: { lat: number; lng: number };
}) {
	// const isMobile = useMediaQuery('(min-width: 600px)');

	// console.log(process.env.GOOGLE_MAPS_API_KEY);
	return (
		<section
			id='google-maps'
			data-testid='google-maps'
			className={styles['map-container']}
		>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
				// bootstrapURLKeys={{ key: 'process.env.GOOGLE_MAPS_API_KEY' }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={{}}
				// onChange={{}}
			></GoogleMapReact>
		</section>
	);
}
