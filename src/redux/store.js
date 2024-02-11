import { configureStore } from '@reduxjs/toolkit'
import statesReducer from './slices/statesSlice'
import filmsInfoReducers from './slices/filmsInfoSlice'


export const store = configureStore({
	reducer: {
		states: statesReducer,
		filmsInfo: filmsInfoReducers
	},
})