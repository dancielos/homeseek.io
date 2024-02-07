import { configureStore } from '@reduxjs/toolkit';

import adminDrawerReducer from './slices/adminDrawer';
import themeSelectorReducer from './slices/themeSelector';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
	reducer: {
		adminDrawerReducer,
		themeSelectorReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
