import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import filmsServices from '../../API/filmsServices';

export const getFilmsCategories = createAsyncThunk(
	'filmsInfo/getFilmsCategories',
	async function (_, { rejectWithValue, dispatch }) {
		try {
			const data = await filmsServices.getCategoryes();
			return data.genres
		} catch (error) {
			console.log(error);
		}
	}
);



const initialState = {
	categories: [
	],
}
export const filmsInfoSlice = createSlice({
	name: 'filmsInfo',
	initialState,
	reducers: {
		setFilmsCategories: (state, action) => {
			state.sortProperty = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(
				getFilmsCategories.fulfilled, (state, actions) => {
					state.categories = actions.payload;
				}
			)
	}
})
export const { setFilmsCategories } = filmsInfoSlice.actions
export default filmsInfoSlice.reducer