import { createTheme, responsiveFontSizes } from '@mui/material';

import { Ubuntu } from 'next/font/google';
import { BOX_SHADOW } from '../constants';
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

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		fluid: true;
		subtle: true;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		subtle: true;
	}
}

declare module '@mui/material/ButtonGroup' {
	interface ButtonGroupPropsVariantOverrides {
		smaller: true;
	}
}

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xm: true;
	}
}

declare module '@mui/material/ButtonGroup' {
	interface ButtonGroupPropsColorOverrides {
		black: true;
		subtle: true;
	}
}

declare module '@mui/material/styles' {
	interface Palette {
		black: Palette['primary'];
		subtle: Palette['primary'];
	}

	interface PaletteOptions {
		black?: PaletteOptions['primary'];
		subtle?: PaletteOptions['primary'];
	}
}

export let baseTheme = responsiveFontSizes(
	createTheme({
		shape: {
			borderRadius: 1,
		},

		breakpoints: {
			values: {
				xs: 0,
				xm: 425,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
		palette: {
			common: {
				black: '#212529',
			},
			primary: {
				main: '#ffe8cc',
				light: '#fff4e6',
				// dark: '#ffa94d',
				contrastText: '#212529',
			},
			secondary: {
				main: '#ffa94d',
				dark: '#f76707',
			},
			subtle: {
				main: '#212529',
			},
			info: {
				main: '#4DA3FF',
				light: '#e6f2ff',
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
				fontSize: '3rem',
			},
			body1: {
				fontWeight: FontWeight.LIGHT,
				paddingBottom: 16,
			},
		},
	})
);

baseTheme.palette = {
	...baseTheme.palette,
	black: baseTheme.palette.augmentColor({
		color: {
			main: '#212529',
		},
		name: 'black',
	}),
};

baseTheme.components = {
	...baseTheme.components,
	MuiChip: {
		styleOverrides: {
			root: {
				borderRadius: 1,
			},
		},
	},
	MuiCard: {
		styleOverrides: {
			root: {
				boxShadow: BOX_SHADOW,
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			contained: {
				boxShadow: BOX_SHADOW,
			},
		},
	},
	MuiFilledInput: {
		styleOverrides: {
			root: {
				paddingBottom: 0,
				// borderColor: '#ffffff',
				// backgroundColor: 'rgba(33, 37, 41, 0.8)',
			},
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				paddingBottom: 0,
				// borderColor: '#ffffff',
				// backgroundColor: 'rgba(33, 37, 41, 0.8)',
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
	MuiPaper: {
		styleOverrides: {
			elevation3: {
				padding: 32,
				[baseTheme.breakpoints.down('sm')]: {
					padding: 16,
				},
				boxShadow: BOX_SHADOW,
			},
			elevation2: {
				padding: 32,
				[baseTheme.breakpoints.down('sm')]: {
					padding: 16,
				},
			},
		},
	},
};
