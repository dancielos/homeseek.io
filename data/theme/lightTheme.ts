import { BOX_SHADOW } from '@/data/constants';
import { createTheme } from '@mui/material';
import { baseTheme } from './baseTheme';

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

export let lightTheme = createTheme(baseTheme);

lightTheme.components = {
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

				color: baseTheme.palette.common.black,
				'& input, & label': {
					color: `${baseTheme.palette.black.main} !important`,
				},
				'& div::after': {
					borderBottom: `2px solid ${baseTheme.palette.secondary.main} !important`,
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

				color: baseTheme.palette.common.black,
				'& input, & label': {
					color: `${baseTheme.palette.black.main} !important`,
				},
				'& div::after': {
					borderBottom: `2px solid ${baseTheme.palette.secondary.main} !important`,
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
				boxShadow: 'unset',
				backgroundColor: '#f1f3f5',
			},
		},
	},
};
