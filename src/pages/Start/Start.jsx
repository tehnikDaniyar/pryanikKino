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



	const { topFilms } = useSelector(store => store.filmsInfo);
	const { top200Films } = useSelector(store => store.filmsInfo);

	// console.log(topFilms, top200Films);


	return (
		<section className={styles.startPage}>
			<div className={styles.filter}>
			</div>
			<div className={styles.sliders}>
				{getSlider(topFilms, 'топ новинок', "topFilms")}
				{getSlider(top200Films, 'топ 200 фильмов', "top200Films")}
			</div>
		</section>
	)
}