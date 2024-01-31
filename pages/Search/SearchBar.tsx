import SearchForm from '@/components/forms/SearchForm';
import { AppBar } from '@mui/material';

export default function SearchBar() {
	return (
		<AppBar
			position='sticky'
			// color='#fff4e6'
			sx={{
				bgcolor: '#fff4e69e',
				boxShadow: 'none',
				py: {
					xs: 1,
					sm: 2,
				},
			}}
			elevation={0}
		>
			<SearchForm withFilters />
		</AppBar>
	);
}
