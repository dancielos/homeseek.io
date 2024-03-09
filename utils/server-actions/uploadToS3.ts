'use server';

import { PutObjectCommand } from '@aws-sdk/client-s3';
import { client } from '../s3';

export default async function uploadToS3(
	images: Array<File>,
	filenames: string[]
): Promise<boolean> {
	if (images.length !== filenames.length) return false;

	// const client = new S3Client({
	// 	region: process.env.BUCKET_REGION,
	// });

	const commands = images
		.filter((image) => image !== null)
		.map(async (image, i) => {
			const fileData = await image!.arrayBuffer();
			return client.send(
				new PutObjectCommand({
					Bucket: process.env.BUCKET_NAME,
					Key: filenames[i],
					Body: Buffer.from(fileData),
				})
			);
		});

	const responses = await Promise.all(commands);

	return responses.every(
		(response) => response['$metadata'].httpStatusCode === 200
	);
}
