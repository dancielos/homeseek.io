type ComparedImages = {
	isTheSame: boolean;
	toDelete: string[];
};

export default function compareUploadedImages(
	oldImages: string[],
	newImages: string[]
): ComparedImages {
	if (oldImages.length === newImages.length)
		return {
			isTheSame: true,
			toDelete: [],
		};

	if (newImages.length === 0)
		return {
			isTheSame: false,
			toDelete: [...oldImages],
		};

	const toDelete: string[] = oldImages.filter((oi) => {
		if (!newImages.includes(oi)) return oi;
	});

	return {
		isTheSame: false,
		toDelete,
	};
}
