// How to use
// use in an async component

// await delay(3000);

export default async function delay(seconds: number = 3) {
	return new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, seconds * 1000);
	});
}
