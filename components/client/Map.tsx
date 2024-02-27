'use client';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.css';
import { Bounds, Coords } from '@/data/types';
// import { useMediaQuery } from '@mui/material';
// import { Suspense } from 'react';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useCallback, useState } from 'react';

const Marker = ({ ...props }: { lat: number; lng: number }) => (
	<FmdGoodIcon color='secondary' {...props} />
);

export default function Map({
	coordinates,
	bounds,
	pins,
}: {
	coordinates: Coords;
	bounds: Bounds;
	pins: Coords[];
}) {
	console.log(coordinates, 'from Map.tsx');
	// const isMobile = useMediaQuery('(min-width: 600px)');

	// console.log(process.env.GOOGLE_MAPS_API_KEY);
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
	});

	const [map, setMap] = useState(null);

	return isLoaded ? (
		// <section
		// 	id='google-maps'
		// 	data-testid='google-maps'
		// 	className={styles['map-container']}
		// >
		<GoogleMap
			mapContainerStyle={{
				width: '100%',
				height: '80vh',
			}}
			center={coordinates}
			zoom={12}
			options={{}}
		>
			{pins.map((pin, i) => (
				<Marker key={i} lat={pin.lat} lng={pin.lng} />
			))}
		</GoogleMap>
	) : (
		//{/* </section> */}
		<></>
	);
}
