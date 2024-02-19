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
			const data = filmsServices.getFilms(id);
			return data;
		} catch (error) {
			console.log(error);
			return []
		}
	}
)

export const getKino = createAsyncThunk(
	'filmsInfo/getKino',
	async function (id, { rejectWithValue, dispatch }) {
		try {
			const data = filmsServices.getKinoOfId(id);
			return data;
		} catch (error) {
			console.log(error);
			return {}
		}
	}
)



const initialState = {
	categories: [
	],
	catIsLoading: false,
	topFilms: [],
	top200Films: [],
	films: [],
	kinoInfo: {},
	kinoIsLoading: false
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
					state.catIsLoading = true;
				}
			)
			.addCase(
				getTop200Films.fulfilled, (state, actions) => {
					state.top200Films = [...actions.payload.items];
					state.catIsLoading = true;
				}
			)
			.addCase(
				getFilms.fulfilled, (state, actions) => {
					state.films = [...actions.payload.items];
				}
			)
			.addCase(
				getKino.fulfilled, (state, actions) => {
					console.log("getKino fulfilled");
					state.kinoInfo = { ...actions.payload };
					state.kinoIsLoading = true;
				}
			)

	}
})
export const { setFilmsCategories, copyCollectionInFilms } = filmsInfoSlice.actions
export default filmsInfoSlice.reducer