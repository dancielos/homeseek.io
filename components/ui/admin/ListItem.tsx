import ClientListItemText from '@/components/client/admin/ListItemText';
import { SvgIconComponent } from '@mui/icons-material';
import {
	ListItemButton,
	ListItemButtonBaseProps,
	ListItemIcon,
	ListItemProps,
	ListItem as MuiListItem,
	SxProps,
} from '@mui/material';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface listItem extends AnchorHTMLAttributes<HTMLAnchorElement> {
	Icon: SvgIconComponent;
	text: string;
	flexDirection?: 'row' | 'row-reverse';
	sx?: SxProps;
	href?: string;
}

export default function ListItem({
	Icon,
	text,
	flexDirection = 'row',
	sx,
	href = '#',
	...args
}: listItem) {
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
				LinkComponent={Link}
				href={href}
				{...args}
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
