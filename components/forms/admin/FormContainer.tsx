import H2 from '@/components/htmlElements/H2';
import { customH2Style } from '@/data/constants';
import { Paper } from '@mui/material';
import { ReactNode } from 'react';

export default function FormContainer({
	children,
	title = '',
}: {
	children: ReactNode;
	title?: string;
}) {
	return (
		<Paper elevation={3}>
			{title ? <H2 sx={customH2Style}>{title}</H2> : ''}
			{children}
		</Paper>
	);
}
