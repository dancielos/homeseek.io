import { createTheme } from '@mui/material';
import { baseTheme } from './baseTheme';

export let darkTheme = createTheme(baseTheme, {
	palette: {
		mode: 'dark',
		common: {
			black: '#fff', // White inverts to black
		},
		primary: {
			main: '#212529', // Invert to black
			light: '#f8f9fa', // Invert to dark background color
			contrastText: '#fff', // Invert to white
		},
		secondary: {
			main: '#f76707', // Darken to a shade of orange
			dark: '#ffa94d', // Lighten to a shade of yellow
		},
		info: {
			main: '#e6f2ff', // Lighten to a shade of blue
			light: '#4DA3FF', // Darken to a shade of blue
		},
	},
});
