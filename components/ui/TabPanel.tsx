'use client';

import { useContext } from 'react';
import styles from './TabPanel.module.css';
import { TabContext, TabContextType } from '../client/TabContext';

type TabPanelProps = {
	index: number;
	list: string[];
};

export default function TabPanel({ index, list }: TabPanelProps) {
	const { tabNumber } = useContext(TabContext) as TabContextType;
	return (
		<div
			className={styles['tab-panel']}
			role='tabpanel'
			hidden={tabNumber !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
		>
			{tabNumber === index && (
				<ul className={styles['ul']}>
					{list.map((listItem) => (
						<li key={listItem}>{listItem}</li>
					))}
				</ul>
			)}
		</div>
	);
}
