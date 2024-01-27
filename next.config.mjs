/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'homeseek-bucket.s3.ca-central-1.amazonaws.com',
			},
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
			},
		],
	},
};

export default nextConfig;
