'use client';
import { Options } from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { defaultTheme } from './theme';

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
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
