export default function validateImageFilenames(filenames: string[]): boolean {
	const imageExtensions = ['.jpg', '.jpeg', '.png'];
	// if (filenames.length === 0) return true;

	// Check each filename in the array
	return filenames.every((name) => {
		const lowercasedFilename = name.toLowerCase();
		return imageExtensions.some((extension) =>
			lowercasedFilename.endsWith(extension)
		);
	});
}
