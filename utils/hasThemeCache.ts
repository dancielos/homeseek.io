export default function hasThemeCache(): boolean | undefined {
	if (typeof window !== 'undefined' && window.localStorage) {
		if (localStorage.getItem('theme'))
			if (localStorage.getItem('theme') === 'dark') return false;
			else return true;
		return undefined;
	}
	return undefined;
}
