import SearchForm from '@/components/forms/SearchForm';
import StickyBar from '@/components/ui/StickyBar';

export default function SearchBar() {
	return (
		<StickyBar>
			<SearchForm withFilters />
		</StickyBar>
	);
}
