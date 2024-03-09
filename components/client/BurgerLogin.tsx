import { getSession } from '@/utils/server-actions/auth';
import {
	Avatar,
	Button,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography,
} from '@mui/material';
import Link from 'next/link';

export default async function BurgerLogin({
	handleClose,
}: {
	handleClose: () => void;
}) {
	const session = await getSession();

	return (
		<>
			{!session ? (
				<ListItem>
					<ListItemButton
						LinkComponent={Link}
						color='secondary'
						href='/login'
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
						onClick={handleClose}
					>
						<ListItemIcon>
							<Avatar />
						</ListItemIcon>
						<Typography sx={{ pb: 0 }}>Login</Typography>
					</ListItemButton>
				</ListItem>
			) : (
				<ListItem>
					<ListItemButton
						color='secondary'
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<ListItemIcon>
							<Avatar />
						</ListItemIcon>
						<Typography sx={{ pb: 0 }}>Hi, {session.user.name}!</Typography>
					</ListItemButton>
				</ListItem>
			)}
		</>
	);
}
