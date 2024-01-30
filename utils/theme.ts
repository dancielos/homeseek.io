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

// declare module '@mui/material/Unstable_Grid2' {
//   interface Grid2Props {
//     dashed: true;
//   }
// }

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		outlined2: true;
	}
}

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
				dark: '#f76707',
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
				lineHeight: 1,
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
						['&:hover']: {
							backgroundColor: '#ffe8cc',
						},
					},
					contained: {
						boxShadow: BOX_SHADOW,
					},
				},
				variants: [
					{
						props: { variant: 'outlined2' },
						style: {
							color: '#212529',
							// fontWeight: 700,
							// background: '#ffc078',
							// textTransform: 'none',
							border: `1px solid #212529`,
							boxShadow: BOX_SHADOW,
						},
					},
				],
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
			MuiImageListItemBar: {
				styleOverrides: {
					root: {
						bottom: '6px',
					},
				},
			},
		},
	})
);
