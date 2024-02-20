import react from "react";
import Slider from "../../components/Slider/Slider";
import { getTopFilms } from "../../redux/slices/filmsInfoSlice";
import { getTop200Films } from "../../redux/slices/filmsInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RatinInd from "../../components/UI/RatingInd/RatingInd";
import styles from './stylesStart.module.scss'
import CardFilm from "../../components/CardFilm/CardFilm";
import Kino from "../Kino/Kino";
import { getCollection } from "../../redux/slices/filmsInfoSlice";

export default function Start() {
	const dispatch = useDispatch();

	const getSlider = (collection, title, key) => {
		return (
			Boolean(collection.length)
				? <Slider slides={collection} title={title} collectionKey={key}></Slider>
				: 'ошибка загрузки данных с сервера, простите'
		)
	}

	// useEffect(() => {
	// 	dispatch(getTopFilms());
	// 	dispatch(getTop200Films());
	// }, []);

	useEffect(() => {
		dispatch(getCollection({ page: 1, collectionName: "TOP_POPULAR_MOVIES" }))
		dispatch(getCollection({ page: 1, collectionName: "TOP_250_MOVIES" }))
	}, []);


	const topFilms = useSelector(store => store.filmsInfo.TOP_POPULAR_MOVIES);
	const top200Films = useSelector(store => store.filmsInfo.TOP_250_MOVIES);


	return (
		<section className={styles.startPage}>
			<div className={styles.filter}>
			</div>
			<div className={styles.sliders}>
				{getSlider(topFilms, 'топ новинок', "TOP_POPULAR_MOVIES")}
				{getSlider(top200Films, 'топ 200 фильмов', "TOP_250_MOVIES")}
			</div>
		</section>
	)
}