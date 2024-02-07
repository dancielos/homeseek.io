'use client';
import { Options } from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from './lightTheme';
import { useAppSelector } from '../store';
import { darkTheme } from './darkTheme';

// TODO: is the caching here necessary?
// Nextjs already has appRouterCacheProvider

export default function ThemeRegistry({
	options,
	children,
	lightModeOnly = false,
}: Readonly<{
	options: Options;
	children: React.ReactNode;
	lightModeOnly?: boolean;
}>) {
	const isLightMode = useAppSelector(
		(state) => state.themeSelectorReducer.theme
	);

	let mode = lightTheme;

	if (!lightModeOnly) {
		mode = isLightMode ? lightTheme : darkTheme;
	}

	return (
		<ThemeProvider theme={mode}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
