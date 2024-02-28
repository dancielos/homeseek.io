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
				hostname: 'image-slider-sample.s3.ca-central-1.amazonaws.com',
			},
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
	env: {
		GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
		GOOGLE_MAPS_ID: process.env.GOOGLE_MAPS_ID,
		DB_URL: process.env.DB_URL,
		S3_URL: process.env.S3_URL,
		HOMESEEK_SECRET: process.env.HOMESEEK_SECRET,
	},
	transpilePackages: ['@mui/x-charts'],
};

export default nextConfig;
