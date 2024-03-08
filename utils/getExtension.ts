export default function getExtension(filename: string): string | null {
	const lastDotIndex = filename.lastIndexOf('.');
	if (
		lastDotIndex === 0 ||
		lastDotIndex === -1 ||
		lastDotIndex === filename.length - 1
	) {
		return null; // No extension found or filename starts or ends with a dot
	}

	return filename.substring(lastDotIndex + 1).toLowerCase();
}
