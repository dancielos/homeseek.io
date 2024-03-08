import concatPathQuery from '@/utils/formatters/concatPathQuery';
import { usePathname, useSearchParams } from 'next/navigation';

// RETRIEVES the current path
//   and simultaneously appends any queries

export default function useFullPath() {
	const [path, searchParams] = [usePathname(), useSearchParams()];
	const fullPath = concatPathQuery({ path, searchParams });

	return fullPath;
}
