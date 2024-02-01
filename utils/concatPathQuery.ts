import { ReadonlyURLSearchParams } from 'next/navigation';

type pathQuery = {
	path: string | null;
	searchParams: ReadonlyURLSearchParams | null;
};

export default function concatPathQuery({
	path,
	searchParams,
}: pathQuery): string {
	const queries: string[] = [];
	if (searchParams) {
		for (const [key, value] of searchParams?.entries()) {
			queries.push(`${key}=${value}`);
		}
	}
	// console.log(queries);

	const pathAndQuery = `${path}?${queries.join('&')}`;
	return pathAndQuery;
}
