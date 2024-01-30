'use client';

import { usePathname } from 'next/navigation';
import CTA from './CTA';

export default function NavBarCTA({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isHomePage = pathname === '/';

	return <CTA variant={isHomePage ? 'contained' : 'outlined2'}>{children}</CTA>;
}
