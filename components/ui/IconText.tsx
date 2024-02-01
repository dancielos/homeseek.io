import { Menu, SvgIconComponent } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

export default function IconText({
	Icon,
	text,
	color = 'inherit',
}: {
	Icon: SvgIconComponent;
	text: string;
	color?: 'primary' | 'secondary' | 'inherit';
}) {
	return (
		<Stack direction='row' marginLeft={'0!important'}>
			<Icon sx={{ marginRight: '0.2rem' }} color={color} />
			<Typography>{text}</Typography>
		</Stack>
	);
}
