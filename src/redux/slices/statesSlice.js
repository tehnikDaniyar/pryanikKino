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
	searchQuery: '',
	isOnline: true,
	isShowSearch: false,
	isMobile: false,
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
		setIsOnline: (state, action) => {
			state.isOnline = action.payload
		},
		setIsShowSearch: (state, action) => {
			console.log('SETISSHOWSEARCH');
			state.isShowSearch = action.payload
		},
		setIsMobile: (state, action) => {
			state.isMobile = action.payload
		},

	},
})
export const { setThemeMode, setCurentCategoryFilms, setCoverInfo, setSearchQuery, setIsOnline, setIsShowSearch, setIsMobile } = statesSlice.actions
export default statesSlice.reducer