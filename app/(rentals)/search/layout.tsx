import SearchBar from '@/pagesLayout/Search/SearchBar';
import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode, Suspense } from 'react';
import Loading from './loading';

export default function SearchLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<SearchBar />
			<Grid container columns={10}>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</Grid>
		</>
	);
}
