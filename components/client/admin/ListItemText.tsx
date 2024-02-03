'use client';

import { useAppSelector } from '@/data/store';
import { ListItemText } from '@mui/material';

export default function ClientListItemText({ text }: { text: string }) {
	const open = useAppSelector((state) => state.adminDrawerReducer.open);

	return (
		<ListItemText
			primary={text}
			primaryTypographyProps={{
				sx: {
					p: 0,
				},
			}}
			sx={{
				opacity: open ? 1 : 0,
			}}
		/>
	);
}
