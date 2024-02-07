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
}: Readonly<{
	options: Options;
	children: React.ReactNode;
}>) {
	const isLightMode = useAppSelector(
		(state) => state.themeSelectorReducer.theme
	);
	return (
		<ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
