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
	topFilmsInfo: {
		topFilms: [],
		isLoading: false
	},
	top200FilmsInfo: {
		top200Films: [],
		isLoading: false
	},
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
			state.films = action.payload
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
					console.log(actions.payload);
					state.topFilmsInfo.topFilms = [...actions.payload.items];
					state.topFilmsInfo.isLoading = true;
				}
			)
			.addCase(
				getTop200Films.fulfilled, (state, actions) => {
					console.log(actions.payload);
					state.top200FilmsInfo.top200Films = [...actions.payload.items];
					state.top200FilmsInfo.isLoading = true;
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