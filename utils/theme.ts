import { BORDER_RADIUS, BOX_SHADOW } from '@/data/constants';
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
				lineHeight: 1,
				fontWeight: FontWeight.BOLD,
				textAlign: 'center',
				paddingBottom: '1.2rem',
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
						borderRadius: BORDER_RADIUS,
						boxShadow: BOX_SHADOW,
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: BORDER_RADIUS,
					},
					contained: {
						boxShadow: BOX_SHADOW,
					},
				},
			},

			MuiFilledInput: {
				styleOverrides: {
					root: {
						borderRadius: BORDER_RADIUS,
						paddingBottom: 0,
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						boxShadow: BOX_SHADOW,
					},
				},
			},
		},
	})
);
