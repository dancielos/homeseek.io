'use client';
import { Options } from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from './lightTheme';
import { useAppSelector } from '../store';
import { darkTheme } from './darkTheme';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../slices/themeSelector';
import hasThemeCache from '@/utils/hasThemeCache';
import { ScopedCssBaseline } from '@mui/material';

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
	let mode = lightTheme;

	const theme = useAppSelector((state) => state.themeSelectorReducer.theme);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('use Effect from themeRegistry invoked...');
		const currentTheme = hasThemeCache();

		if (currentTheme) {
			const changeTo = currentTheme === 'dark' ? 'light' : 'dark';
			dispatch(setTheme(changeTo));
		}
	}, []);

	if (!lightModeOnly) {
		mode = theme === 'light' ? lightTheme : darkTheme;
	}

	console.log({ lightModeOnly, theme });

	return (
		<ThemeProvider theme={mode}>
			{/* <ScopedCssBaseline /> */}

			{children}
		</ThemeProvider>
	);
}
