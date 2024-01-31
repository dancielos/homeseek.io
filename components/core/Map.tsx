'use client';

import GoogleMapReact from 'google-map-react';
import styles from './Map.module.css';
import { useMediaQuery } from '@mui/material';

export default function Map() {
	const isMobile = useMediaQuery('(min-width: 600px)');
	const coordinates = { lat: 43.65107, lng: -79.347015 };
	// console.log(process.env.GOOGLE_MAPS_API_KEY);
	return (
		<div className={styles['map-container']}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={{}}
				// onChange={{}}
			></GoogleMapReact>
		</div>
	);
}
