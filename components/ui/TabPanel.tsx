import { TabPanel as MuiTabPanel } from '@mui/lab';

import styles from './TabPanel.module.css';

type TabPanelProps = {
	value: string;
	list: string[];
};

export default function TabPanel({ value, list }: TabPanelProps) {
	return (
		<MuiTabPanel value={value}>
			{
				<ul className={styles['ul']}>
					{list.map((listItem) => (
						<li key={listItem}>{listItem}</li>
					))}
				</ul>
			}
		</MuiTabPanel>
	);
}
