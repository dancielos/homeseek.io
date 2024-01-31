import SearchBar from '@/pages/Search/SearchBar';
import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode } from 'react';

export default function SearchLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<SearchBar />
			<Grid container columns={10}>
				{children}
			</Grid>
		</>
	);
}
