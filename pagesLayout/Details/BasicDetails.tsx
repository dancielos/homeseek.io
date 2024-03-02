import H3 from '@/components/htmlElements/H3';
import P from '@/components/htmlElements/P';
import IconText from '@/components/ui/IconText';
import { PROPERTY_TYPE, PropertyType } from '@/data/types';
import {
	BathtubOutlined,
	KingBedOutlined,
	MapsHomeWorkOutlined,
	PetsOutlined,
} from '@mui/icons-material';
import { Paper, Stack } from '@mui/material';

type BasicDetailsProps = {
	address: string;
	price: string;
	bedrooms: number;
	bathrooms: number;
	propertyType: PropertyType;
	isPetFriendly: boolean;
};

export default function BasicDetails({
	address,
	price,
	bedrooms,
	bathrooms,
	propertyType,
	isPetFriendly,
}: BasicDetailsProps) {
	return (
		<Paper elevation={3}>
			<H3
				gutterBottom
				sx={{
					fontSize: {
						xs: 28,
						sm: 32,
					},
				}}
			>
				{price}
			</H3>
			<P>{address}</P>
			<Stack direction='row' useFlexGap flexWrap='wrap' columnGap={2}>
				<IconText
					color='secondary'
					Icon={KingBedOutlined}
					text={`${bedrooms} bedrooms`}
				/>
				<IconText
					color='secondary'
					Icon={BathtubOutlined}
					text={`${bathrooms} bathrooms`}
				/>
				<IconText
					color='secondary'
					Icon={MapsHomeWorkOutlined}
					text={PROPERTY_TYPE[propertyType]}
				/>
				{isPetFriendly ? (
					<IconText
						color='secondary'
						Icon={PetsOutlined}
						text={'Pet-friendly'}
					/>
				) : null}
			</Stack>
		</Paper>
	);
}
