import { BOX_SHADOW } from '@/data/constants';
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
		fluid: true;
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
	}
}

declare module '@mui/material/styles' {
	interface Palette {
		black: Palette['primary'];
	}

	interface PaletteOptions {
		black?: PaletteOptions['primary'];
	}
}

export let theme = responsiveFontSizes(
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

theme = createTheme(theme, {
	palette: {
		black: theme.palette.augmentColor({
			color: {
				main: '#212529',
			},
			name: 'black',
		}),
	},
});

// export const theme = createTheme({...defaults, });
theme.components = {
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
	// MuiStep: {
	// 	styleOverrides: {
	// 		root: {
	// 			backgroundColor: 'red',
	// 			width: '100%',
	// 		},
	// 	},
	// },
	MuiButtonGroup: {},
	MuiButton: {
		styleOverrides: {
			root: {
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
				props: { variant: 'fluid' },
				style: {
					color: '#212529',
					// fontWeight: 700,
					// background: '#ffc078',
					// textTransform: 'none',
					border: `1px solid #212529`,
					boxShadow: BOX_SHADOW,
				},
			},
			{
				props: { variant: 'subtle' },
				style: {
					backgroundColor: '#f1f3f5',
				},
			},
		],
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
	MuiTextField: {
		styleOverrides: {
			// root: {
			// paddingBottom: 0,
			// backgroundColor: 'rgba(33, 37, 41, 0.8)',
			// '& input, & label': {
			// 	color: '#ffe8cc',
			// },
			root: {
				paddingBottom: 0,
				backgroundColor: '#f8f9fa',

				color: theme.palette.common.black,
				'& input, & label': {
					color: `${theme.palette.black.main} !important`,
				},
				'& div::after': {
					borderBottom: `2px solid ${theme.palette.secondary.main} !important`,
				},
			},
		},
	},
	MuiFormControl: {
		styleOverrides: {
			// root: {
			// paddingBottom: 0,
			// backgroundColor: 'rgba(33, 37, 41, 0.8)',
			// '& input, & label': {
			// 	color: '#ffe8cc',
			// },
			root: {
				paddingBottom: 0,
				backgroundColor: '#f8f9fa',

				color: theme.palette.common.black,
				'& input, & label': {
					color: `${theme.palette.black.main} !important`,
				},
				'& div::after': {
					borderBottom: `2px solid ${theme.palette.secondary.main} !important`,
				},
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
				[theme.breakpoints.down('sm')]: {
					padding: 16,
				},
				boxShadow: BOX_SHADOW,
			},
			elevation2: {
				padding: 32,
				[theme.breakpoints.down('sm')]: {
					padding: 16,
				},
				boxShadow: 'unset',
				backgroundColor: '#f1f3f5',
			},
		},
	},
};
