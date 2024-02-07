import prefersDarkTheme from '@/utils/prefersDarkTheme';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
	theme: boolean;
};

const prefersDarkMode = prefersDarkTheme();

const initialState = {
	theme: prefersDarkMode ? false : true,
} as InitialState;

export const themeSelector = createSlice({
	name: 'themeSelector',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			// Access the current theme value from state and toggle it
			state.theme = !state.theme;
		},
	},
});

export const { toggleTheme } = themeSelector.actions;
export default themeSelector.reducer;
