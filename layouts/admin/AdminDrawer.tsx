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
import SettingsIcon from '@mui/icons-material/Settings';

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
				/>
			</List>
			<Divider />
			<List>
				<ListItem text='Dashboard' Icon={SpeedIcon} />
				<ListItem text='Messages' Icon={MailIcon} />
				<ListItem text='Properties' Icon={HolidayVillageIcon} />
				<ListItem text='Settings' Icon={SettingsIcon} />
			</List>
			<Divider />
		</ClientDrawer>
	);
}
