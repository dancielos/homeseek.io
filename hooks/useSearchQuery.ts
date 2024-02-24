import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useSearchQuery(name: string, value: string) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const params = new URLSearchParams(searchParams?.toString());
		params.set(name, value);

		// const query = getSearchQuery(pathname!, '' + value);
		router.push(`${pathname}?${params.toString()}`);
	}, [value]);
}
