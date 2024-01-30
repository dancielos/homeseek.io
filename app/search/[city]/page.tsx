import SearchBar from '@/components/forms/SearchBar';
import { AppBar, Container } from '@mui/material';

export default function Search() {
	return (
		// <Container>
		<>
			<AppBar
				position='relative'
				// color='#fff4e6'
				sx={{
					bgcolor: '#fff4e6',
					boxShadow: 'none',
					py: 2,
				}}
				elevation={0}
			>
				<SearchBar withFilters />
			</AppBar>
		</>
		// </Container>
	);
}
