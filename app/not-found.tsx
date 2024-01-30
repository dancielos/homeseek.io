import { redirect } from 'next/navigation';

// Not the best UX
// But, for demo/portfolio purpose, this is fine.

export default function NotFound() {
	redirect('/');
}
