// NOT WORKING with NextJS

export default function prefersDarkTheme(): MediaQueryList | undefined {
	if (typeof window !== 'undefined' && window.matchMedia) {
		return window.matchMedia('(prefers-color-scheme: dark)');
	}

	// return false;
}
