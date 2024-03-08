import getExtension from './getExtension';

export default function getFilename(s: string): string | null {
	const lastDotIndex = s.lastIndexOf('/');
	if (
		lastDotIndex === 0 ||
		lastDotIndex === -1 ||
		lastDotIndex === s.length - 1
	) {
		return null; // No extension found or filename starts or ends with a dot
	}

	const name = s.substring(lastDotIndex + 1).toLowerCase();
	const ext = getExtension(name);
	if (!ext) return null;

	return name;
}
