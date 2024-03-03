'use server';

export default async function createListing(
	prevState: any[],
	formData: FormData
): Promise<any[]> {
	return Array.from(formData.entries());
}
