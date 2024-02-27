'use client';

// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.css';
import { Bounds, Coords, PropertyListing } from '@/data/types';
import {
	APIProvider,
	InfoWindow,
	Map,
	MapCameraChangedEvent,
	MapCameraProps,
	MapEvent,
	Marker,
} from '@vis.gl/react-google-maps';
// import { useMediaQuery } from '@mui/material';
// import { Suspense } from 'react';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useCallback, useEffect, useState } from 'react';
import MapMarker from './MapMarker';

// const Marker = ({ ...props }: { lat: number; lng: number }) => (
// 	<div {...props}>
// 		<FmdGoodIcon color='secondary' />
// 	</div>
// );

export default function MapComponent({
	coordinates,
	bounds,
	listing,
}: {
	coordinates: Coords;
	bounds: Bounds;
	listing: PropertyListing[];
}) {
	const INITIAL_CAMERA = {
		center: coordinates,
		zoom: 13,
	};

	const [cameraProps, setCameraProps] =
		useState<MapCameraProps>(INITIAL_CAMERA);

	useEffect(() => {
		// console.log('use effect called');
		setCameraProps({
			center: coordinates,
			zoom: 13,
		});
	}, [coordinates]);

	const handleCameraChange = useCallback(
		(ev: MapEvent) => {
			// console.log('handler called');
			return setCameraProps(ev.detail as MapCameraProps);
		},
		[coordinates]
	);

	return (
		<APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
			<Map
				// center={coordinates}
				defaultZoom={13}
				{...cameraProps}
				onDrag={handleCameraChange}
				// onCameraChanged={handleCameraChange}
				// draggableCursor={true}
				// gestureHandling={'greedy'}
				disableDefaultUI={true}
				mapId={process.env.GOOGLE_MAPS_ID}
			>
				{listing.map((pin, i) => (
					<MapMarker
						key={i}
						pin={{ lat: pin.lat, lng: pin.lng }}
						address={pin.address}
						price={pin.price}
						id={pin.id}
						img={`${process.env.S3_URL}/${pin.img[0]}`}
					/>
				))}
			</Map>
		</APIProvider>
	);
}
