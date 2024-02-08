export default function toTitleCase(text: string) {
	const words = text.split(' ');
	return words
		.map((word) => {
			let newWord = '';
			for (let i = 0; i < word.length; i++) {
				newWord += i === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
			}
			return newWord;
		})
		.join(' ');
}
