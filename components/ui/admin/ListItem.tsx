import ClientListItemText from '@/components/client/admin/ListItemText';
import { SvgIconComponent } from '@mui/icons-material';
import {
	ListItemButton,
	ListItemIcon,
	ListItem as MuiListItem,
	SxProps,
} from '@mui/material';

export default function ListItem({
	Icon,
	text,
	flexDirection = 'row',
	sx,
}: {
	Icon: SvgIconComponent;
	text: string;
	flexDirection?: 'row' | 'row-reverse';
	sx?: SxProps;
}) {
	return (
		<MuiListItem
			key={text}
			disablePadding
			sx={{ display: 'block', mb: 2, ...(sx ? sx : {}) }}
		>
			<ListItemButton
				sx={{
					minHeight: 48,
					justifyItems: 'center',
					alignItems: 'center',
					px: 2.5,
					columnGap: 2,
					flexDirection,
				}}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						justifyContent: 'center',
					}}
				>
					<Icon />
				</ListItemIcon>
				<ClientListItemText text={text} />
			</ListItemButton>
		</MuiListItem>
	);
}
