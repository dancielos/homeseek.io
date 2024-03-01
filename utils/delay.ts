// How to use
// use in an async component

// await delay(3000);

export default async function delay() {
	return new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, 3000);
	});
}
