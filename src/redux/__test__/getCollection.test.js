import { getCollection } from "../slices/filmsInfoSlice";
import { vi, describe, test, expect } from "vitest";

describe('test getCollection', () => {
	test('test TOP_POPULAR_MOVIE', async () => {
		const topMovies = {
			"total": 700,
			"totalPages": 35,
			"items": [
				{
					"kinopoiskId": 1402937,
					"imdbId": "tt10720352",
					"nameRu": "Артур, ты король",
					"nameEn": null,
					"nameOriginal": "Arthur the King",
					"countries": [
						{
							"country": "США"
						}
					],
					"genres": [
						{
							"genre": "приключения"
						}
					],
					"ratingKinopoisk": null,
					"ratingImdb": 6.9,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1402937.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1402937.jpg"
				},
				{
					"kinopoiskId": 5235275,
					"imdbId": null,
					"nameRu": "Домовой",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "фэнтези"
						},
						{
							"genre": "ужасы"
						}
					],
					"ratingKinopoisk": null,
					"ratingImdb": null,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5235275.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5235275.jpg"
				},
				{
					"kinopoiskId": 1115471,
					"imdbId": "tt14536120",
					"nameRu": "Мастер и Маргарита",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "фэнтези"
						}
					],
					"ratingKinopoisk": 8,
					"ratingImdb": 7.8,
					"year": 2023,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1115471.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1115471.jpg"
				},
				{
					"kinopoiskId": 817167,
					"imdbId": null,
					"nameRu": "Дом у дороги",
					"nameEn": null,
					"nameOriginal": "Road House",
					"countries": [
						{
							"country": "США"
						}
					],
					"genres": [
						{
							"genre": "триллер"
						},
						{
							"genre": "криминал"
						},
						{
							"genre": "боевик"
						}
					],
					"ratingKinopoisk": null,
					"ratingImdb": null,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/817167.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/817167.jpg"
				},
				{
					"kinopoiskId": 4540126,
					"imdbId": "tt15239678",
					"nameRu": "Дюна: Часть вторая",
					"nameEn": null,
					"nameOriginal": "Dune: Part Two",
					"countries": [
						{
							"country": "США"
						},
						{
							"country": "Канада"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "фантастика"
						},
						{
							"genre": "приключения"
						},
						{
							"genre": "боевик"
						}
					],
					"ratingKinopoisk": null,
					"ratingImdb": null,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4540126.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4540126.jpg"
				},
				{
					"kinopoiskId": 1346358,
					"imdbId": "tt26537298",
					"nameRu": "Летучий корабль",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "мелодрама"
						},
						{
							"genre": "приключения"
						},
						{
							"genre": "фэнтези"
						},
						{
							"genre": "комедия"
						}
					],
					"ratingKinopoisk": null,
					"ratingImdb": null,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1346358.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1346358.jpg"
				},
				{
					"kinopoiskId": 5274398,
					"imdbId": "tt28940477",
					"nameRu": "Золото Умальты",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "приключения"
						},
						{
							"genre": "вестерн"
						}
					],
					"ratingKinopoisk": null,
					"ratingImdb": null,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5274398.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5274398.jpg"
				},
				{
					"kinopoiskId": 4414587,
					"imdbId": "tt5177120",
					"nameRu": "Министерство неджентльменских дел",
					"nameEn": null,
					"nameOriginal": "The Ministry of Ungentlemanly Warfare",
					"countries": [
						{
							"country": "США"
						},
						{
							"country": "Великобритания"
						},
						{
							"country": "Турция"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "боевик"
						},
						{
							"genre": "военный"
						},
						{
							"genre": "история"
						}
					],
					"ratingKinopoisk": null,
					"ratingImdb": null,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4414587.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4414587.jpg"
				},
				{
					"kinopoiskId": 4902648,
					"imdbId": "tt14539740",
					"nameRu": "Годзилла и Конг: Новая империя",
					"nameEn": null,
					"nameOriginal": "Godzilla x Kong: The New Empire",
					"countries": [
						{
							"country": "США"
						}
					],
					"genres": [
						{
							"genre": "фантастика"
						},
						{
							"genre": "боевик"
						}
					],
					"ratingKinopoisk": null,
					"ratingImdb": null,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4902648.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4902648.jpg"
				},
				{
					"kinopoiskId": 5047464,
					"imdbId": null,
					"nameRu": "Бременские музыканты",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "приключения"
						},
						{
							"genre": "фэнтези"
						},
						{
							"genre": "комедия"
						},
						{
							"genre": "семейный"
						}
					],
					"ratingKinopoisk": 7,
					"ratingImdb": 4.8,
					"year": 2023,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5047464.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5047464.jpg"
				},
				{
					"kinopoiskId": 4396438,
					"imdbId": "tt14230458",
					"nameRu": "Бедные-несчастные",
					"nameEn": null,
					"nameOriginal": "Poor Things",
					"countries": [
						{
							"country": "США"
						},
						{
							"country": "Великобритания"
						},
						{
							"country": "Ирландия"
						},
						{
							"country": "Венгрия"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "фантастика"
						},
						{
							"genre": "комедия"
						}
					],
					"ratingKinopoisk": 7.8,
					"ratingImdb": 8,
					"year": 2023,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4396438.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4396438.jpg"
				},
				{
					"kinopoiskId": 5078842,
					"imdbId": "tt21692408",
					"nameRu": "Кунг-фу Панда 4",
					"nameEn": null,
					"nameOriginal": "Kung Fu Panda 4",
					"countries": [
						{
							"country": "США"
						},
						{
							"country": "Китай"
						}
					],
					"genres": [
						{
							"genre": "приключения"
						},
						{
							"genre": "боевик"
						},
						{
							"genre": "фэнтези"
						},
						{
							"genre": "комедия"
						},
						{
							"genre": "мультфильм"
						},
						{
							"genre": "семейный"
						}
					],
					"ratingKinopoisk": 6.7,
					"ratingImdb": 6.5,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5078842.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5078842.jpg"
				},
				{
					"kinopoiskId": 5047468,
					"imdbId": null,
					"nameRu": "Холоп 2",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "комедия"
						}
					],
					"ratingKinopoisk": 6.8,
					"ratingImdb": 5.9,
					"year": 2023,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5047468.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5047468.jpg"
				},
				{
					"kinopoiskId": 4968810,
					"imdbId": "tt17279496",
					"nameRu": "Падение империи",
					"nameEn": null,
					"nameOriginal": "Civil War",
					"countries": [
						{
							"country": "США"
						},
						{
							"country": "Великобритания"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "боевик"
						}
					],
					"ratingKinopoisk": null,
					"ratingImdb": null,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4968810.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4968810.jpg"
				},
				{
					"kinopoiskId": 1311129,
					"imdbId": "tt26505281",
					"nameRu": "Воздух",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "военный"
						},
						{
							"genre": "история"
						}
					],
					"ratingKinopoisk": 5.8,
					"ratingImdb": 5.5,
					"year": 2023,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1311129.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1311129.jpg"
				},
				{
					"kinopoiskId": 409424,
					"imdbId": "tt1160419",
					"nameRu": "Дюна",
					"nameEn": null,
					"nameOriginal": "Dune: Part One",
					"countries": [
						{
							"country": "США"
						},
						{
							"country": "Канада"
						},
						{
							"country": "Венгрия"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "фантастика"
						},
						{
							"genre": "приключения"
						},
						{
							"genre": "боевик"
						}
					],
					"ratingKinopoisk": 7.7,
					"ratingImdb": 8,
					"year": 2021,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/409424.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/409424.jpg"
				},
				{
					"kinopoiskId": 5275429,
					"imdbId": "tt27487288",
					"nameRu": "Лёд 3",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "мелодрама"
						}
					],
					"ratingKinopoisk": 7.9,
					"ratingImdb": 7.5,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5275429.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5275429.jpg"
				},
				{
					"kinopoiskId": 4489198,
					"imdbId": "tt27526478",
					"nameRu": "Три богатыря и Пуп Земли",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "приключения"
						},
						{
							"genre": "мультфильм"
						},
						{
							"genre": "семейный"
						}
					],
					"ratingKinopoisk": 6.8,
					"ratingImdb": 4.9,
					"year": 2023,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4489198.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4489198.jpg"
				},
				{
					"kinopoiskId": 5117258,
					"imdbId": "tt23747498",
					"nameRu": "Онегин",
					"nameEn": null,
					"nameOriginal": null,
					"countries": [
						{
							"country": "Россия"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "мелодрама"
						}
					],
					"ratingKinopoisk": 7,
					"ratingImdb": null,
					"year": 2024,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5117258.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5117258.jpg"
				},
				{
					"kinopoiskId": 4664634,
					"imdbId": "tt15398776",
					"nameRu": "Оппенгеймер",
					"nameEn": null,
					"nameOriginal": "Oppenheimer",
					"countries": [
						{
							"country": "США"
						},
						{
							"country": "Великобритания"
						}
					],
					"genres": [
						{
							"genre": "драма"
						},
						{
							"genre": "биография"
						},
						{
							"genre": "история"
						}
					],
					"ratingKinopoisk": 8.2,
					"ratingImdb": 8.4,
					"year": 2023,
					"type": "FILM",
					"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4664634.jpg",
					"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4664634.jpg"
				}
			]
		}
		const dispatch = vi.fn();
		const thunk = getCollection({ page: 1, collectionName: "TOP_POPULAR_MOVIES" });
		await thunk(dispatch);
		// console.log(dispatch.mock.calls[1][0].payload.data);
		const data = dispatch.mock.calls[1][0].payload.data;
		expect(data).toEqual(topMovies);
	})
	test('test rejected', async () => {
		const dispatch = vi.fn();
		const thunk = getCollection({ page: 1, collectionName: "NO-NAME" });
		await thunk(dispatch);
		console.log(dispatch.mock.calls);
		const data = dispatch.mock.calls[1][0].payload.data;
		expect(data).toEqual([]);
	})
})