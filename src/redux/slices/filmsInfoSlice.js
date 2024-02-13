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
			return []
		}
	}
);

export const getTopFilms = createAsyncThunk(
	'filmsInfo/getTopFilms',
	async function (_, { rejectWithValue, dispatch }) {
		try {
			console.log('getTopFilms');
			const data = filmsServices.getCollections('TOP_POPULAR_MOVIES');
			return data;
		} catch (error) {
			console.log(error);
			return []
		}
	}
)



const initialState = {
	categories: [
	],
	topFilms: [

	]
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
			.addCase(
				getTopFilms.fulfilled, (state, actions) => {
					console.log(actions.payload);
					state.topFilms = [...actions.payload.items]
				}
			)
	}
})
export const { setFilmsCategories } = filmsInfoSlice.actions
export default filmsInfoSlice.reducer