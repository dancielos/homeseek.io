// import { testDB } from '@/utils/db';

import testS3 from '@/utils/s3';
import Image from 'next/image';

const test2 = await testS3();

export default function Home() {
	// const test = testDB();
	return (
		<main>
			<h1>Hello World!</h1>
			<p>New changes</p>
			<Image src={test2} alt='test' height={100} width={100} priority />
			{/* <p>{process.arch}</p> */}
		</main>
	);
}
