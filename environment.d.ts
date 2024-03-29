export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GITHUB_AUTH_TOKEN: string;
			NODE_ENV: 'development' | 'production';
			DB_USERNAME: string;
			DB_PASSWORD: string;
			DB_NAME: string;
			DB_URL: string;
			BUCKET_NAME: string;
			BUCKET_REGION: string;
			ACCESS_KEY_ID: string;
			SECRET_ACCESS_KEY: string;
			GOOGLE_MAPS_API_KEY: string;
			S3_URL: string;
			GOOGLE_MAPS_ID: string;
			HOMESEEK_SECRET: string;
		}
	}
}
