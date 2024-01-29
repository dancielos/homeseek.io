import { SvgIconComponent } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

export default function IconText({
	Icon,
	text,
}: {
	Icon: SvgIconComponent;
	text: string;
}) {
	return (
		<Stack direction='row' marginLeft={'0!important'}>
			<Icon sx={{ marginRight: '0.2rem' }} />
			<Typography>{text}</Typography>
		</Stack>
	);
}
