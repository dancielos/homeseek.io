export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GITHUB_AUTH_TOKEN: string;
			NODE_ENV: 'development' | 'production';
			DB_USERNAME: string;
			DB_PASSWORD: string;
			DB_NAME: string;
			DB_URL: string;
		}
	}
}
