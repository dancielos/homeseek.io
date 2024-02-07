import hasThemeCache from '@/utils/hasThemeCache';
import prefersDarkTheme from '@/utils/prefersDarkTheme';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
	theme: 'dark' | 'light';
};

const initialState = {
	theme: 'light',
} as InitialState;

export const themeSelector = createSlice({
	name: 'themeSelector',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
			state.theme = action.payload;
			localStorage.setItem('theme', action.payload);
		},
		toggleTheme: (state) => {
			// Access the current theme value from state and toggle it
			state.theme = state.theme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', state.theme);
		},
	},
});

export const { toggleTheme, setTheme } = themeSelector.actions;
export default themeSelector.reducer;
