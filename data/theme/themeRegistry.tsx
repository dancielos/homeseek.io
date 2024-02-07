'use client';
import { Options } from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from './lightTheme';

// TODO: is the caching here necessary?
// Nextjs already has appRouterCacheProvider

export default function ThemeRegistry({
	options,
	children,
}: Readonly<{
	options: Options;
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
