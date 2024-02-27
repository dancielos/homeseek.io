import { Coords } from '@/data/types';
import formatPrice from '@/utils/formatPrice';
import { Stack, Typography } from '@mui/material';
import {
	AdvancedMarker,
	InfoWindow,
	useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { useState } from 'react';
import Image from 'next/image';
import DetailsLink from '../ui/DetailsLink';

type MapMarkerProps = {
	pin: Coords;
	price: number;
	address: string;
	img: string;
	id: string;
	i: number;
};

export default function MapMarker({
	img,
	pin,
	price,
	address,
	id,
	i,
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
				<InfoWindow
					anchor={marker}
					position={{ lat: pin.lat, lng: pin.lng }}
					onCloseClick={closeInfoWindow}
				>
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
							<DetailsLink
								data-testid={`more-details-${i}`}
								href={`/listing/${id}`}
								size='small'
							>
								More details
							</DetailsLink>
						</Stack>
					</Stack>
				</InfoWindow>
			)}
		</>
	);
}
