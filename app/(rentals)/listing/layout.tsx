import { ReactNode, Suspense } from 'react';
import Loading from './loading';

export default function ListingLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Loading />
			<Suspense fallback={<Loading />}>{children}</Suspense>
		</>
	);
}
