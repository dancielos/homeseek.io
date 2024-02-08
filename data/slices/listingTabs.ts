import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
	value: number;
};

const initialState: InitialState = {
	value: 1,
};

export const listingTabs = createSlice({
	name: 'listingTabs',
	initialState,
	reducers: {
		setValue: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
	},
});

export const { setValue } = listingTabs.actions;
export default listingTabs.reducer;
