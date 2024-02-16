import axios from "axios";

const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';
const headers = {
	'X-API-KEY': '7c574677-155a-443f-ad27-b7a2b0f8ab9c',
	'Content-Type': 'application/json',
}


export default class filmsServices {
	static async getCategoryes() {
		const response = await axios.get(`${baseUrl}/filters`, {
			headers: headers,
		});
		return await response.data
	}
	static async getCollections(query) {
		const response = await axios.get(`${baseUrl}/collections`, {
			headers: headers,
			params: {
				type: query,
				page: '1'
			}
		});
		return await response.data
	}

	//?genres=17&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1

	static async getFilms(id) {
		const response = await axios.get(`${baseUrl}`, {
			headers: headers,
			params: {
				genres: id,
				order: 'RATING',
				type: 'FILM',
				ratingFrom: 0,
				ratingTo: 10,
				yearFrom: 1000,
				yearTo: 3000,
				page: 1,
				page: '1'
			}
		});
		return await response.data
	}
}

