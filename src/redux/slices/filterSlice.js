import { createSlice } from '@reduxjs/toolkit'



const initialState = {
	country: '',
	genre: '',
	order: 'RATING',
	type: 'FILM'
};




export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCountries: (state, action) => {
			state.country = action.payload
		},
		setOrder: (state, action) => {
			state.order = action.payload

		},
		setType: (state, action) => {
			state.type = action.payload

		},
	},
});



export const { setCountries, setOrder, setType } = filterSlice.actions
export default filterSlice.reducer