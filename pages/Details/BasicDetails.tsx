import H3 from '@/components/htmlElements/H3';
import P from '@/components/htmlElements/P';
import IconText from '@/components/ui/IconText';
import { BOX_SHADOW } from '@/data/constants';
import {
	BathtubOutlined,
	KingBedOutlined,
	MapsHomeWorkOutlined,
	PetsOutlined,
} from '@mui/icons-material';
import { Paper, Stack } from '@mui/material';

export default function BasicDetails() {
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
				$1600CAD
			</H3>
			<P>150 Peter Herner Bay, Winnipeg, Manitoba, R2V 4W5</P>
			<Stack direction='row' useFlexGap flexWrap='wrap' columnGap={2}>
				<IconText
					color='secondary'
					Icon={KingBedOutlined}
					text={`4 bedrooms`}
				/>
				<IconText
					color='secondary'
					Icon={BathtubOutlined}
					text={`2 bathrooms`}
				/>
				<IconText
					color='secondary'
					Icon={MapsHomeWorkOutlined}
					text={'Condo'}
				/>
				<IconText color='secondary' Icon={PetsOutlined} text={'Pet-friendly'} />
			</Stack>
		</Paper>
	);
}
