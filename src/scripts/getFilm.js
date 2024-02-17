import { Kinobox } from "../scripts/player.js";

export const Player = (id) => {
	return new Kinobox('.kinobox_player', { search: { kinopoisk: `${id}` } }).init();
}