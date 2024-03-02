import SearchForm from '@/components/forms/SearchForm';
import StickyBar from '@/components/ui/StickyBar';
import { Suspense } from 'react';

export default function SearchBar() {
	return (
		<StickyBar>
			<Suspense fallback={null}>
				<SearchForm withFilters />
			</Suspense>
		</StickyBar>
	);
}
