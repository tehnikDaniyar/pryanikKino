import { configureStore } from '@reduxjs/toolkit'
import statesReducer from './slices/statesSlice'
import filmsInfoReducers from './slices/filmsInfoSlice'
import filterReducer from './slices/filterSlice'


export const store = configureStore({
	reducer: {
		states: statesReducer,
		filmsInfo: filmsInfoReducers,
		filter: filterReducer
	},
})