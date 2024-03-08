import { createHash } from 'crypto';
import getExtension from './getExtension';

export default function hashFilename(s: string, i: number): string {
	const extension = getExtension(s);
	const today = Date.now();
	return (
		createHash('md5')
			.update(s + today)
			.digest('hex')
			.toUpperCase() + `-${i + 1}.${extension}`
	);
}
