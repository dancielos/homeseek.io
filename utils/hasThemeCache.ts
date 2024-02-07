export default function hasThemeCache(): 'dark' | 'light' | null {
	if (typeof window !== 'undefined' && window.localStorage) {
		return localStorage.getItem('theme') as 'dark' | 'light' | null;
	}
	return null;
}
