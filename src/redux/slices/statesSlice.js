import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	themeMode: localStorage.getItem('themeMode') || 'light',
	curentCategoryFilms: {
		id: 1,
		genre: 'триллер'
	},
	coverInfo: {
		isCover: false,
		coverUrl: ''
	},
	searchQuery: ''
}


export const statesSlice = createSlice({
	name: 'states',
	initialState,
	reducers: {
		setThemeMode: (state, action) => {
			state.themeMode = action.payload;
			localStorage.setItem('themeMode', action.payload)
		},
		setCurentCategoryFilms: (state, action) => {
			state.curentCategoryFilms = { ...action.payload };
		},
		setCoverInfo: (state, action) => {
			state.coverInfo = { ...action.payload }
		},
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload
		},
	},
})
export const { setThemeMode, setCurentCategoryFilms, setCoverInfo, setSearchQuery } = statesSlice.actions
export default statesSlice.reducer