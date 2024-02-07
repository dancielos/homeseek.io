import { createTheme } from '@mui/material';
import { baseTheme } from './baseTheme';

export let darkTheme = createTheme(baseTheme, {
	palette: {
		mode: 'dark',
		common: {
			black: '#212529',
			white: '#f8f9fa',
		},
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
			contrastText: '#fff',
		},
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
					backgroundColor: darkTheme.palette.primary.main,
				},
			},
		],
	},
};
