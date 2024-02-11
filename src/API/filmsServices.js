import axios from "axios";

const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/filters';
const headers = {
	'X-API-KEY': '7c574677-155a-443f-ad27-b7a2b0f8ab9c',
	'Content-Type': 'application/json',
}


export default class filmsServices {
	static async getCategoryes() {
		const response = await axios.get(baseUrl, {
			headers: headers
		});
		return await response.data
	}
}

// async function getListCategories() {
// 	const data = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', {
// 		method: 'GET',
// headers: {
// 	'X-API-KEY': '7c574677-155a-443f-ad27-b7a2b0f8ab9c',
// 		'Content-Type': 'application/json',
// 		},
// 	});

// 	const response = await data.json();
// 	return response;
// };
