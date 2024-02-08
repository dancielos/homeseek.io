import MuiTabPanel from '@mui/lab/TabPanel';

import styles from './TabPanel.module.css';

type TabPanelProps = {
	value: string;
	list: string[];
};

export default function CustomTabPanel({ value, list }: TabPanelProps) {
	return (
		<MuiTabPanel value={value} className={styles['tab-panel']}>
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
