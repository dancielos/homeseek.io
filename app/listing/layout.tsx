import TitleBar from '@/pages/Details/TitleBar';
import { Container } from '@mui/material';
import { ReactNode } from 'react';

import Grid from '@mui/material/Unstable_Grid2';

export default function ListingLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<TitleBar />
			<Container
				sx={{
					pt: 4,
					pb: 12,
				}}
			>
				<Grid container columns={10} columnSpacing={2}>
					{children}
				</Grid>
			</Container>
		</>
	);
}
