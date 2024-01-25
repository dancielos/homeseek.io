'use server';

import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { unstable_noStore } from 'next/cache';

// import Image from 'next/image';

const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
	credentials: {
		secretAccessKey,
		accessKeyId,
	},
	region,
});

export default async function testS3() {
	// unstable_noStore();
	const command = new GetObjectCommand({
		Bucket: bucketName,
		Key: 'duck.jpeg',
	});
	const url = await s3.send(command);
	// console.log(url);
	return url;
}