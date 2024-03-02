export function getSearchQuery(pathname: string, searchValue: string): string {
	const path = pathname === '/' ? '/search' : '';

	let queryParams = `s=${searchValue}`;
	return `${path}?${queryParams}`;
}
