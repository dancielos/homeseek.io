import H3 from '@/components/htmlElements/H3';
import IconText from '@/components/ui/IconText';
import {
	BathtubOutlined,
	KingBedOutlined,
	MapsHomeWorkOutlined,
} from '@mui/icons-material';
import { Paper, Stack } from '@mui/material';

export default function BasicDetails() {
	return (
		<Paper
			sx={{
				p: 2,
			}}
		>
			<H3>$1600CAD</H3>
			<Stack direction='row' useFlexGap flexWrap='wrap' columnGap={2}>
				<IconText Icon={KingBedOutlined} text={`4 bedrooms`} />
				<IconText Icon={BathtubOutlined} text={`2 bathrooms`} />
				<IconText Icon={MapsHomeWorkOutlined} text={'Condo'} />
			</Stack>
		</Paper>
	);
}
