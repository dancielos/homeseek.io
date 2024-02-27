import { Coords } from '@/data/types';
import formatPrice from '@/utils/formatPrice';
import { Box, Button, Stack, Typography } from '@mui/material';
import {
	AdvancedMarker,
	InfoWindow,
	Marker,
	useAdvancedMarkerRef,
	useMarkerRef,
} from '@vis.gl/react-google-maps';
import { useState } from 'react';
import CTA from './CTA';
import Link from 'next/link';
import Image from 'next/image';

type MapMarkerProps = {
	pin: Coords;
	price: number;
	address: string;
	img: string;
	id: number;
};

export default function MapMarker({
	img,
	pin,
	price,
	address,
	id,
}: MapMarkerProps) {
	const [markerRef, marker] = useAdvancedMarkerRef();

	const [infowindowShown, setInfowindowShown] = useState(false);

	const toggleInfoWindow = () =>
		setInfowindowShown((previousState) => !previousState);

	const closeInfoWindow = () => setInfowindowShown(false);

	return (
		<>
			<AdvancedMarker
				ref={markerRef}
				position={{ lat: pin.lat, lng: pin.lng }}
				onClick={toggleInfoWindow}
				// onMouseOver={toggleInfoWindow}
				// onMouseOut={(e) =>
				// 	setTimeout(() => {
				// 		closeInfoWindow();
				// 	}, 3000)
				// }
			/>
			{infowindowShown && (
				<InfoWindow anchor={marker} position={{ lat: pin.lat, lng: pin.lng }}>
					<Stack>
						<Stack flexDirection='row' gap={1}>
							<Image
								src={img}
								width={64}
								height={64}
								alt={address}
								quality={12}
							/>
							<Typography>{address}</Typography>
						</Stack>
						<Stack justifyContent='space-between' flexDirection='row'>
							<Typography variant='body2' alignSelf='end'>
								{formatPrice(price)}
							</Typography>
							<CTA href='#' size='small'>
								More details
							</CTA>
						</Stack>
					</Stack>
				</InfoWindow>
			)}
		</>
	);
}
