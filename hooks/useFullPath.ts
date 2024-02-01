import concatPathQuery from '@/utils/concatPathQuery';
import { usePathname, useSearchParams } from 'next/navigation';

export default function useFullPath() {
	const [path, searchParams] = [usePathname(), useSearchParams()];
	const fullPath = concatPathQuery({ path, searchParams });

	return fullPath;
}
