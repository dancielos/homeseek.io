import { BOX_SHADOW } from '@/data/constants';
import { createTheme } from '@mui/material';
import { baseTheme } from './baseTheme';

export let lightTheme = createTheme(baseTheme, {
	palette: {
		...baseTheme.palette,
		mode: 'light',
	},
});

lightTheme.components = {
	...baseTheme.components,
	MuiButton: {
		styleOverrides: {
			...baseTheme.components?.MuiButton?.styleOverrides,
			root: {
				['&:hover']: {
					backgroundColor: '#ffe8cc',
				},
			},
		},
		variants: [
			{
				props: { variant: 'fluid' },
				style: {
					color: baseTheme.palette.common.black,
					// fontWeight: 700,
					// background: '#ffc078',
					// textTransform: 'none',
					border: `1px solid ${baseTheme.palette.common.black}`,
					boxShadow: BOX_SHADOW,
				},
			},
			{
				props: { variant: 'subtle' },
				style: {
					color: baseTheme.palette.common.black,
					backgroundColor: '#f1f3f5',
				},
			},
		],
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
	MuiPaper: {
		styleOverrides: {
			...baseTheme.components?.MuiPaper?.styleOverrides,
			elevation2: {
				...(baseTheme.components?.MuiPaper?.styleOverrides
					?.elevation2 as object),
				boxShadow: 'unset',
				backgroundColor: '#f1f3f5',
			},
		},
	},
};
