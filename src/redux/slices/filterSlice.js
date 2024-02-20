import { createSlice } from '@reduxjs/toolkit'



const initialState = {
	country: '',
	genre: '',
	order: '',
	type: ''
}




export const filterSlice = createSlice({
	name: '',
	initialState,
	reducers: {

	},
});



export const { } = filterSlice.actions
export default filterSlice.reducer