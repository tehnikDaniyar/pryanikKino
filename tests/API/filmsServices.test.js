import { expect, test, describe, vi, beforeAll, beforeEach, afterAll, afterEach } from "vitest";
import axios from "axios";
import filmsServices from '../../src/API/filmsServices';

describe('filmsSErvices test', () => {
	const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';
	const headers = {
		'X-API-KEY': '7c574677-155a-443f-ad27-b7a2b0f8ab9c',
		'Content-Type': 'application/json',
	};

	beforeEach(() => { vi.mock('axios') });
	afterEach(() => { vi.clearAllMocks() });

	test('getCategories test', async () => {
		const expectData = {
			genres: [
				{
					id: 1,
					genre: "боевик"
				}
			],
			countries: [
				{
					id: 1,
					country: "США"
				}
			]
		};

		axios.get.mockResolvedValue({ data: expectData });
		const result = await filmsServices.getCategoryes();
		expect(axios.get).toBeCalledTimes(1);
		expect(axios.get).toBeCalledWith(`${baseUrl}/filters`, { headers });
		expect(result).toEqual(expectData);
	});

	test('getCollection test', async () => {
		const expectData = {
			"total": 200,
			"totalPages": 7,
			"items": [
				{
					"kinopoiskId": 263531,
					"nameRu": "Мстители",
					"nameEn": "The Avengers",
					"nameOriginal": "The Avengers",
					"countries": [
						{
							"country": "США"
						}
					],
					"genres": [
						{
							"genre": "фантастика"
						}
					],
					"ratingKinopoisk": 7.9,
					"ratingImbd": 7.9,
					"year": "2012",
					"type": "FILM",
					"posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
				}
			]
		};
		const query = 'TOP_POPULAR_ALL';
		const page = 1;

		axios.get.mockResolvedValue({ data: expectData });
		const result = await filmsServices.getCollections(query, page);

		expect(axios.get).toBeCalledTimes(1);
		expect(axios.get).toBeCalledWith(`${baseUrl}/collections`, { headers, params: { type: query, page } });
		expect(result).toEqual(expectData);
	})

	test('getFilms test', async () => {
		const expectData = {
			"total": 7,
			"totalPages": 1,
			"items": [
				{
					"kinopoiskId": 263531,
					"imdbId": "tt0050561",
					"nameRu": "Мстители",
					"nameEn": "The Avengers",
					"nameOriginal": "The Avengers",
					"countries": [
						{
							"country": "США"
						}
					],
					"genres": [
						{
							"genre": "фантастика"
						}
					],
					"ratingKinopoisk": 7.9,
					"ratingImdb": 7.9,
					"year": 2012,
					"type": "FILM",
					"posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
				}
			]
		};
		const props = { id: 1, page: 1, country: 1, order: "RATING", type: "ALL" };
		const { id, page, country, order, type } = { ...props }
		const params = {
			genres: id,
			order: order,
			type: type,
			ratingFrom: 0,
			ratingTo: 10,
			yearFrom: 1000,
			yearTo: 3000,
			page: page,
			countries: country,
		};

		axios.get.mockResolvedValue({ data: expectData });
		const result = await filmsServices.getFilms({ ...props });

		expect(axios.get).toBeCalledTimes(1);
		expect(axios.get).toBeCalledWith(`${baseUrl}`, { headers, params });
		expect(result).toEqual(expectData);
	})

	test('getKinoOfId test', async () => {
		const expectData = {
			"kinopoiskId": 301,
			"kinopoiskHDId": "4824a95e60a7db7e86f14137516ba590",
			"imdbId": "tt0133093",
			"nameRu": "Матрица",
			"nameEn": "The Matrix",
			"nameOriginal": "The Matrix",
			"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg",
			"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
			"coverUrl": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig",
			"logoUrl": "https://avatars.mds.yandex.net/get-ott/1648503/2a00000170a5418408119bc802b53a03007b/orig",
			"reviewsCount": 293,
			"ratingGoodReview": 88.9,
			"ratingGoodReviewVoteCount": 257,
			"ratingKinopoisk": 8.5,
			"ratingKinopoiskVoteCount": 524108,
			"ratingImdb": 8.7,
			"ratingImdbVoteCount": 1729087,
			"ratingFilmCritics": 7.8,
			"ratingFilmCriticsVoteCount": 155,
			"ratingAwait": 7.8,
			"ratingAwaitCount": 2,
			"ratingRfCritics": 7.8,
			"ratingRfCriticsVoteCount": 31,
			"webUrl": "https://www.kinopoisk.ru/film/301/",
			"year": 1999,
			"filmLength": 136,
			"slogan": "Добро пожаловать в реальный мир",
			"description": "Жизнь Томаса Андерсона разделена на_две части:",
			"shortDescription": "Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным",
			"editorAnnotation": "Фильм доступен только на языке оригинала с русскими субтитрами",
			"isTicketsAvailable": false,
			"productionStatus": "POST_PRODUCTION",
			"type": "FILM",
			"ratingMpaa": "r",
			"ratingAgeLimits": "age16",
			"hasImax": false,
			"has3D": false,
			"lastSync": "2021-07-29T20:07:49.109817",
			"countries": [
				{
					"country": "США"
				}
			],
			"genres": [
				{
					"genre": "фантастика"
				}
			],
			"startYear": 1996,
			"endYear": 1996,
			"serial": false,
			"shortFilm": false,
			"completed": false
		};
		const id = 301;
		axios.get.mockResolvedValue({ data: expectData });
		const result = await filmsServices.getKinoOfId(id);

		expect(axios.get).toBeCalledTimes(1);
		expect(axios.get).toBeCalledWith(`${baseUrl}/${id}`, { headers });
		expect(result).toEqual(expectData);
	})

	test('getSearchedFilms test', async () => {
		const expectData = {
			"keyword": "мстители",
			"pagesCount": 7,
			"searchFilmsCountResult": 134,
			"films": [
				{
					"filmId": 263531,
					"nameRu": "Мстители",
					"nameEn": "The Avengers",
					"type": "FILM",
					"year": "2012",
					"description": "США, Джосс Уидон(фантастика)",
					"filmLength": "2:17",
					"countries": [
						{
							"country": "США"
						}
					],
					"genres": [
						{
							"genre": "фантастика"
						}
					],
					"rating": "NOTE!!! 7.9 for released film or 99% if film have not released yet",
					"ratingVoteCount": 284245,
					"posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
				}
			]
		};
		const keyword = 'мстители';
		const page = 1;

		axios.get.mockResolvedValue({ data: expectData });
		const result = await filmsServices.getSearchedFilms({ query: keyword, page });

		expect(axios.get).toBeCalledTimes(1);
		expect(axios.get).toBeCalledWith(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword`, { headers, params: { keyword, page } });
		expect(result).toEqual(expectData);

	})

});