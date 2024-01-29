import React from 'react';
import underline from '@/assets/needle-underline.svg';
import styles from '@/styles/underline.module.css';

export default function Underline({ children }: { children: React.ReactNode }) {
	return <span className={styles.underline}>{children}</span>;
}
