import { Box, Divider, List } from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from './AdminDrawer.module.css';
import ClientDrawer from '@/components/client/admin/Drawer';
import ToggleDrawer from '@/components/client/admin/ToggleDrawer';

import ListItem from '@/components/ui/admin/ListItem';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MailIcon from '@mui/icons-material/Mail';
import SpeedIcon from '@mui/icons-material/Speed';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';

import { Suspense } from 'react';
import LogoutLink from '@/components/forms/login/LogoutLink';

export default function AdminDrawer() {
	return (
		<ClientDrawer>
			<Box className={styles['back-button-container']}>
				<ToggleDrawer drawerAction='close'>
					<ChevronLeftIcon />
				</ToggleDrawer>
			</Box>
			<Divider />
			<List>
				<ListItem
					text='Go to Homepage'
					Icon={OpenInNewIcon}
					flexDirection='row-reverse'
					sx={{ mb: 0 }}
					href='/'
					id='drawer-link-homepage'
					// buttonSx={{}}
				/>
			</List>
			<Divider />
			<List>
				<ListItem
					text='Dashboard'
					Icon={SpeedIcon}
					href='/dashboard'
					id='drawer-link-dashboard'
				/>
				<ListItem
					text='Messages'
					Icon={MailIcon}
					href='/messages'
					id='drawer-link-messages'
				/>
				<ListItem
					text='Properties'
					Icon={HolidayVillageIcon}
					href='/properties'
					id='drawer-link-properties'
				/>
			</List>
			<Divider />
			<Suspense>
				<LogoutLink />
			</Suspense>
		</ClientDrawer>
	);
}
