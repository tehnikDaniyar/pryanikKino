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

	static async getCollections(query, page) {
		const response = await axios.get(`${baseUrl}/collections`, {
			headers: headers,
			params: {
				type: query,
				page: page,
			}
		});
		return await response.data
	}

	//?genres=17&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1
	static async getFilms({ id, page, country, order, type }) {
		console.log("GETFILMSinSERVICES", type);
		const response = await axios.get(`${baseUrl}`, {
			headers: headers,
			params: {
				genres: id,
				order: order,
				type: type,
				ratingFrom: 0,
				ratingTo: 10,
				yearFrom: 1000,
				yearTo: 3000,
				page: page,
				countries: country,
			}
		});
		return await response.data
	}

	static async getKinoOfId(id) {
		const response = await axios.get(`${baseUrl}//${id}`, {
			headers: headers,
			// params: {
			// 	id: id
			// }
		});
		return await response.data
	}

	//  'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=sea&page=1'

	static async getSearchedFilms({ query, page }) {
		console.log("GETSEARCHEDFILMSSERVICES", query, page);
		const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword`, {
			headers: headers,
			params: {
				keyword: query,
				page: page,
				type: "TV_SERIES"
			}
		});
		return await response.data
	}


}

