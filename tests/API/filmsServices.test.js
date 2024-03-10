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

});