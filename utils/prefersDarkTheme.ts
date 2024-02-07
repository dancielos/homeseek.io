export default function prefersDarkTheme(): MediaQueryList {
	return window.matchMedia('(prefers-color-scheme: dark)');
}
