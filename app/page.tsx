import { testDB } from '@/utils/db';

export default function Home() {
	const test = testDB();
	return (
		<main>
			<h1>Hello World!</h1>
		</main>
	);
}
