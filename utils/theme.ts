import { createTheme, responsiveFontSizes } from '@mui/material';

import { Ubuntu } from 'next/font/google';
// import './globals.css';
enum FontWeight {
	LIGHT = 400,
	NORMAL = 500,
	BOLD = 700,
}
const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export const theme = responsiveFontSizes(
	createTheme({
		palette: {
			primary: {
				main: '#ffe8cc',
				// light: '#fff4e6',
				// dark: '#ffa94d',
				contrastText: '#212529',
			},
			secondary: {
				main: '#ffa94d',
			},
		},
		typography: {
			fontFamily: `${ubuntu.style.fontFamily}, Arial, sans-serif`,
			h1: {
				letterSpacing: -4,
				fontWeight: FontWeight.BOLD,

				textAlign: 'center',
			},
			h2: {
				fontWeight: FontWeight.BOLD,
				paddingBottom: 24,
			},
			body1: {
				fontWeight: FontWeight.LIGHT,
				paddingBottom: 16,
			},
		},
		components: {
			MuiCard: {
				styleOverrides: {
					root: {
						borderRadius: 1,
						boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 1,
					},
					contained: {
						boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
					},
				},
			},

			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						borderRadius: 1,
						paddingBottom: 0,
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
					},
				},
			},
		},
	})
);
