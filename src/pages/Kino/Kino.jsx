import react, { useEffect, useState } from "react";
import styles from './stylesKino.module.scss'
import { Player } from "../../scripts/getFilm";
import { useParams } from "react-router-dom";
import RatingInd from "../../components/UI/RatingInd/RatingInd";
import { setCoverInfo } from "../../redux/slices/statesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import { getKino } from "../../redux/slices/filmsInfoSlice";
import { xFrameBypass, customElementBuiltin } from "../../scripts/xFrameBypass";

export default function Kino() {

	const filmId = useParams().id;
	const dispatch = useDispatch();
	const { kinoInfo, kinoIsLoading } = useSelector(store => store.filmsInfo);

	console.log("KINO", kinoInfo, kinoIsLoading);

	// const kino = JSON.stringify({
	// 	"kinopoiskId": 301,
	// 	"kinopoiskHDId": "4824a95e60a7db7e86f14137516ba590",
	// 	"imdbId": "tt0133093",
	// 	"nameRu": "Матрица",
	// 	"nameEn": "The Matrix",
	// 	"nameOriginal": "The Matrix",
	// 	"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg",
	// 	"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
	// 	"coverUrl": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig",
	// 	"logoUrl": "https://avatars.mds.yandex.net/get-ott/1648503/2a00000170a5418408119bc802b53a03007b/orig",
	// 	"reviewsCount": 293,
	// 	"ratingGoodReview": 88.9,
	// 	"ratingGoodReviewVoteCount": 257,
	// 	"ratingKinopoisk": 8.5,
	// 	"ratingKinopoiskVoteCount": 524108,
	// 	"ratingImdb": 8.7,
	// 	"ratingImdbVoteCount": 1729087,
	// 	"ratingFilmCritics": 7.8,
	// 	"ratingFilmCriticsVoteCount": 155,
	// 	"ratingAwait": 7.8,
	// 	"ratingAwaitCount": 2,
	// 	"ratingRfCritics": 7.8,
	// 	"ratingRfCriticsVoteCount": 31,
	// 	"webUrl": "https://www.kinopoisk.ru/film/301/",
	// 	"year": 1999,
	// 	"filmLength": 136,
	// 	"slogan": "Добро пожаловать в реальный мир",
	// 	"description": "Жизнь Томаса Андерсона разделена на_две части:",
	// 	"shortDescription": "Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным",
	// 	"editorAnnotation": "Фильм доступен только на языке оригинала с русскими субтитрами",
	// 	"isTicketsAvailable": false,
	// 	"productionStatus": "POST_PRODUCTION",
	// 	"type": "FILM",
	// 	"ratingMpaa": "r",
	// 	"ratingAgeLimits": "age16",
	// 	"hasImax": false,
	// 	"has3D": false,
	// 	"lastSync": "2021-07-29T20:07:49.109817",
	// 	"countries": [
	// 		{
	// 			"country": "США"
	// 		}
	// 	],
	// 	"genres": [
	// 		{
	// 			"genre": "фантастика"
	// 		}
	// 	],
	// 	"startYear": 1996,
	// 	"endYear": 1996,
	// 	"serial": false,
	// 	"shortFilm": false,
	// 	"completed": false
	// })

	// // const [filmId, setFilmId] = useState('5304403');
	// console.log(JSON.parse(kino));


	// // new Kinobox('.kinobox_player', { search: { kinopoisk: `301` } }).init();
	// const kinoInfo = JSON.parse(kino);

	useEffect(() => {
		if (filmId) {
			dispatch(getKino(filmId))
		}
	}, [])

	useEffect(() => {
		if (kinoIsLoading) {
			Player(filmId)
		}
	}, [filmId, kinoIsLoading])

	useEffect(() => {
		if (kinoIsLoading, kinoInfo.coverUrl) {
			dispatch(setCoverInfo({ isCover: true, coverUrl: kinoInfo.coverUrl }))
		}

		return function clearCover() {
			dispatch(setCoverInfo({ isCover: false, coverUrl: "" }));
		}


	}, [kinoIsLoading, kinoInfo.coverUrl])

	// xFrameBypass();
	// customElementBuiltin();

	if (kinoIsLoading) {
		return (
			<section className={styles.wrapper}>

				<header className={styles.header}>
					<div className={styles.logo}>
						<div className={styles.logoImg}>
							{
								kinoInfo.logoUrl
									? <img src={kinoInfo.logoUrl} alt="cover" className="_ibg" />
									: ""
							}
						</div>
						<div className={styles.logoDesc}>

							<table className={styles.table}>
								<thead>
									<tr>
										<td>Страны</td>
										<td>Жанры</td>
										<td>Год</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className={styles.countries}>
												{
													kinoInfo.countries
														? kinoInfo.countries.map(c => <span key={c.country}>{c.country}</span>)
														: "Страна неизвестна"
												}
											</div>
										</td>
										<td>
											<div className={styles.genres}>
												{
													kinoInfo.genres && kinoInfo.genres.length > 0
														? kinoInfo.genres.map(g => <span key={g.genre}>{g.genre}</span>)
														: "жанр не указан"
												}
											</div>
										</td>
										<td>
											<div className={styles.year}>
												{kinoInfo.year
													? <span>{kinoInfo.year}</span>
													: <span>Год не указан</span>
												}
											</div>
										</td>
									</tr>
								</tbody>
							</table>

						</div>
					</div>

					<div className={styles.names}>
						<h1 className={styles.title}>{kinoInfo.nameRu} / {kinoInfo.nameOriginal ? kinoInfo.nameOriginal : ""}</h1>
						<p className={styles.slogan}>{kinoInfo.slogan}</p>
						<p className={styles.shortDescription}>
							{
								kinoInfo.shortDescription
									? <span>{kinoInfo.shortDescription}</span>
									: ""
							}
						</p>
					</div>

				</header>

				<div className={styles.info}>
					<div className={styles.poster}>
						<img src={kinoInfo.posterUrl} alt="poster" />
					</div>

					<div className={styles.description}>
						{
							kinoInfo.description
								? <p>{kinoInfo.description}</p>
								: ""
						}
					</div>

				</div>

				<div className={styles.player}>
					<h2 className={styles.playerTitle}>Смотреть онлайн</h2>
					<div className={styles.playerWrapper}>
						<div className={styles.ratings}>
							<div>
								<span>Imbd</span>
								<div>
									<Rating name="customized-10" defaultValue={kinoInfo.ratingImdb} max={10} readOnly precision={0.1} size="large" />
								</div>
							</div>

							<div>
								<span>Kinopoisk</span>
								<div>
									<Rating name="customized-10" defaultValue={kinoInfo.ratingKinopoisk} max={10} readOnly precision={0.1} size="large" />
								</div>
							</div>
						</div>

						<div className={styles.video}>
							<div className="kinobox_player"></div>
						</div>

					</div>

				</div>

			</section>
		)
	} else {
		return <p>sceleton</p>
	}
}