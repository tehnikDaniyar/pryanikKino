import react from "react";
import styles from './stylesCardFilm.module.scss'
import RatingInd from '../UI/RatingInd/RatingInd'

export default function CardFilm({ item }) {

	// const item = {
	// 	kinopoiskId: 1048766,
	// 	imdbId: "tt5773402",
	// 	nameRu: "Доминион",
	// 	nameEn: null,
	// 	nameOriginal: "Dominion",
	// 	countries: [
	// 		{
	// 			country: "Австралия"
	// 		}
	// 	],
	// 	genres: [
	// 		{
	// 			genre: "ужасы"
	// 		},
	// 		{
	// 			genre: "документальный"
	// 		}
	// 	],
	// 	ratingKinopoisk: 8.7,
	// 	ratingImdb: 9,
	// 	year: 2018,
	// 	"type": "FILM",
	// 	posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/1048766.jpg",
	// 	"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1048766.jpg"
	// }



	return (
		<article className={styles.wrapper}>

			<div className={styles.ratings}>
				<div>
					<span>Imbd</span>
					<RatingInd rating={item.ratingImdb} title={'рейтинг Imdb'}></RatingInd>
				</div>
				<div>
					<span>Kinopoisk</span>
					<RatingInd rating={item.ratingKinopoisk} title='рейтинг Kinopoisk'></RatingInd>
				</div>
			</div>

			<div className={styles.genres}>
				{item.genres && item.genres.map(g => <span key={g.genre}>{g.genre}</span>)}
			</div>

			<div className={styles.poster}>
				<img src={item.posterUrl} className="_ibg" alt="poster of film" />
			</div>

			<div className={styles.names}>
				<h3 className={styles.titleRu}>{item.nameRu}</h3> <span className={styles.slash}>/</span>
				<h3 className={styles.titleEn}>{item.nameOriginal}</h3>
			</div>

			<div>


				<div className={styles.countries}>
					{item.countries && item.countries.map(c => <span key={c.country}>{c.country}</span>)}
				</div>

				<div className={styles.year}>
					<span>{item.year}</span>
				</div>
			</div>






		</article>


	)
}