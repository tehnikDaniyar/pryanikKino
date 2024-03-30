import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import filmsServices from '../../API/filmsServices';
import { act } from 'react-dom/test-utils';

export const getFilmsCategories = createAsyncThunk(
	'filmsInfo/getFilmsCategories',
	async function (_, { rejectWithValue, dispatch }) {
		try {
			const data = await filmsServices.getCategoryes();
			return data
		} catch (error) {
			console.log(error);
			return []
		}
	}
);

export const getTopFilms = createAsyncThunk(
	'filmsInfo/getTopFilms',
	async function ({ page }, { rejectWithValue, dispatch }) {
		try {
			const data = filmsServices.getCollections('TOP_POPULAR_MOVIES', page);
			return data;
		} catch (error) {
			console.log(error);
			return []
		}
	}
)

export const getCollection = createAsyncThunk(
	'filmsInfo/getCollection',
	async function ({ page, collectionName }, { rejectWithValue, dispatch }) {
		try {
			const data = await filmsServices.getCollections(collectionName, page);
			return { collectionName: collectionName, data: data };
		} catch (error) {
			console.log(error);
			return []
		}
	}
)

export const getTop200Films = createAsyncThunk(
	'filmsInfo/getTop200Films',
	async function ({ page }, { rejectWithValue, dispatch }) {
		try {
			const data = filmsServices.getCollections('TOP_250_MOVIES', page);
			return data;
		} catch (error) {
			console.log(error);
			return []
		}
	}
)

export const getFilms = createAsyncThunk(
	'filmsInfo/getFilms',
	async function ({ id, page, country, order, type }, { rejectWithValue, dispatch }) {
		try {
			console.log("GETFILMINSLICE", type);
			const data = filmsServices.getFilms({ id, page, country, order, type });
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

export const getSearchedFilms = createAsyncThunk(
	'filmsInfo/getSearchedFilms',
	async function ({ query, page }, { rejectWithValue, dispatch }) {
		try {
			console.log("GETSEARCHEDFILMS", query, page);
			const data = await filmsServices.getSearchedFilms({ query: query, page: page });
			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
			return {}
		}
	}
)



export const initialState = {
	categories: [
	],
	catIsLoading: false,
	totalPages: 1,
	topFilms: [],
	top200Films: [],
	TOP_POPULAR_MOVIES: [],
	TOP_250_MOVIES: [],
	FAMILY: [],
	films: [],
	currentPage: 1,
	kinoInfo: {},
	kinoIsLoading: false,
	countries: []
}

export const filmsInfoSlice = createSlice({
	name: 'filmsInfo',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			if (!isNaN(action.payload) && action.payload > 0) {
				const pageNumber = action.payload;
				state.currentPage = Math.floor(pageNumber);
			} else {
				state.currentPage = 1;
			}
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(
				getFilmsCategories.fulfilled, (state, actions) => {
					state.categories = actions.payload.genres;
					state.countries = actions.payload.countries;
				}
			)
			.addCase(
				getTopFilms.fulfilled, (state, actions) => {
					state.topFilms = [...actions.payload.items];
					state.films = [...actions.payload.items];
					state.catIsLoading = true;
					state.totalPages = actions.payload.totalPages;
				}
			)
			.addCase(
				getTop200Films.fulfilled, (state, actions) => {
					state.top200Films = [...actions.payload.items];
					state.films = [...actions.payload.items];
					state.catIsLoading = true;
					state.totalPages = actions.payload.totalPages;
				}
			)

			.addCase(
				getCollection.fulfilled, (state, actions) => {
					state[actions.payload.collectionName] = actions.payload.data.items
					state.films = [...actions.payload.data.items]; // for Films
					state.catIsLoading = true;
					state.totalPages = actions.payload.data.totalPages; // for pagination
				}
			)

			.addCase(
				getFilms.fulfilled, (state, actions) => {
					state.films = [...actions.payload.items];
					state.totalPages = actions.payload.totalPages;

				}
			)
			.addCase(
				getKino.fulfilled, (state, actions) => {
					console.log("getKino fulfilled");
					state.kinoInfo = { ...actions.payload };
					state.kinoIsLoading = true;
				}
			)

			.addCase(
				getSearchedFilms.fulfilled, (state, actions) => {
					state.films = [...actions.payload.films];
					state.totalPages = actions.payload.pagesCount;
				}
			)
	}
})
export const { setFilmsCategories, copyCollectionInFilms, setCurrentPage, } = filmsInfoSlice.actions
export default filmsInfoSlice.reducer