import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	themeMode: localStorage.getItem('themeMode') || 'light',
}


export const statesSlice = createSlice({
	name: 'states',
	initialState,
	reducers: {
		setThemeMode: (state, action) => {
			state.themeMode = action.payload;
			localStorage.setItem('themeMode', action.payload)
		},
	},
})
export const { setThemeMode } = statesSlice.actions
export default statesSlice.reducer