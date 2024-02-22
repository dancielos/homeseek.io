import { configureStore } from '@reduxjs/toolkit';

import adminDrawerReducer from './slices/adminDrawer';
import themeSelectorReducer from './slices/themeSelector';
import listingTabsReducer from './slices/listingTabs';
import imageSliderReducer from './slices/imageSliderSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
	reducer: {
		adminDrawerReducer,
		themeSelectorReducer,
		listingTabsReducer,
		imageSliderReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
