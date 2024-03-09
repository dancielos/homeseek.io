'use server';

import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';

export default async function deleteFromS3(
	images: Array<string>
): Promise<boolean> {
	// console.log('deleting from s3');
	// console.log('to be deleted: ', images);
	if (images.length === 0) return false;

	const client = new S3Client({
		region: process.env.BUCKET_REGION,
	});

	const commands = images.map((image) => {
		return client.send(
			new DeleteObjectCommand({
				Bucket: process.env.BUCKET_NAME,
				Key: image,
			})
		);
	});

	const responses = await Promise.all(commands);
	// console.log('responses:', responses);

	return responses.every(
		(response) => response['$metadata'].httpStatusCode === 204
	);
}
