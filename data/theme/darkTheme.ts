import { createTheme } from '@mui/material';
import { baseTheme } from './baseTheme';

export let darkTheme = createTheme(baseTheme, {
	palette: {
		mode: 'dark',
		background: {
			paper: '#212529',
			default: '#212529',
		},
		text: {
			primary: '#f8f9fa',
			secondary: '#f1f3f5',
			// icon: '#f8f9fa',
		},
		primary: {
			main: '#212529',
			light: '#868e96',
			// dark: '#ffa94d',
			contrastText: '#f8f9fa',
		},
		subtle: {
			main: '#f8f9fa',
			light: '#495057',
		},
		divider: '#868e96',
	},
});

darkTheme.components = {
	...darkTheme.components,
	MuiSvgIcon: {
		styleOverrides: {
			root: {
				color: darkTheme.palette.text.primary,
			},
		},
	},
	MuiButton: {
		variants: [
			{
				props: { variant: 'subtle' },
				style: {
					color: darkTheme.palette.subtle.light,
					backgroundColor: darkTheme.palette.subtle.light,
				},
			},
		],
	},
};
