import SearchForm from '@/components/forms/SearchForm';

import { AppBar, Button } from '@mui/material';

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
				<SearchForm withFilters />
			</AppBar>
		</>
		// </Container>
	);
}
