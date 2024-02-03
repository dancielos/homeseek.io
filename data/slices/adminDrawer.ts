import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
	open: boolean;
};

const initialState = {
	open: true,
} as InitialState;

export const adminDrawer = createSlice({
	name: 'adminDrawer',
	initialState,
	reducers: {
		openDrawer: () => initialState,
		closeDrawer: () => ({ open: false }),
	},
});

export const { openDrawer, closeDrawer } = adminDrawer.actions;
export default adminDrawer.reducer;
