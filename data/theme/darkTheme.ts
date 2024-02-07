import { createTheme } from '@mui/material';
import { baseTheme } from './baseTheme';

export let darkTheme = createTheme(baseTheme, {
	palette: {
		mode: 'dark',
	},
});
