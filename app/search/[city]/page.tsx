import SearchForm from '@/components/forms/SearchForm';

import { AppBar, Button, Container } from '@mui/material';

export default function Search() {
	return (
		// <Container>
		<>
			<AppBar
				position='relative'
				// color='#fff4e6'
				sx={{
					bgcolor: '#fff4e69e',
					boxShadow: 'none',
					py: 2,
					display: {
						xs: 'none',
						sm: 'inherit',
					},
				}}
				elevation={0}
			>
				<SearchForm withFilters />
			</AppBar>
			<Container>some data here</Container>
		</>
		// </Container>
	);
}
