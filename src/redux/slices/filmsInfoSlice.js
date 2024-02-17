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

export const getTop200Films = createAsyncThunk(
	'filmsInfo/getTop200Films',
	async function (_, { rejectWithValue, dispatch }) {
		try {
			console.log('getTopFilms');
			const data = filmsServices.getCollections('TOP_250_MOVIES');
			return data;
		} catch (error) {
			console.log(error);
			return []
		}
	}
)

export const getFilms = createAsyncThunk(
	'filmsInfo/getFilms',
	async function (id, { rejectWithValue, dispatch }) {
		try {
			console.log('getFilms');
			const data = filmsServices.getFilms(id);
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
	topFilms: [],
	top200Films: [],
	films: []
}

export const filmsInfoSlice = createSlice({
	name: 'filmsInfo',
	initialState,
	reducers: {
		setFilmsCategories: (state, action) => {
			state.sortProperty = action.payload;
		},
		copyCollectionInFilms: (state, action) => {
			state.films = state[action.payload]
		}
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
					state.topFilms = [...actions.payload.items];
				}
			)
			.addCase(
				getTop200Films.fulfilled, (state, actions) => {
					console.log(actions.payload);
					state.top200Films = [...actions.payload.items];
				}
			)
			.addCase(
				getFilms.fulfilled, (state, actions) => {
					console.log('getfilms', actions.payload);
					state.films = [...actions.payload.items];
				}
			)
	}
})
export const { setFilmsCategories, copyCollectionInFilms } = filmsInfoSlice.actions
export default filmsInfoSlice.reducer