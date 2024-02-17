import react from "react";
import Slider from "../../components/Slider/Slider";
import { getTopFilms } from "../../redux/slices/filmsInfoSlice";
import { getTop200Films } from "../../redux/slices/filmsInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RatinInd from "../../components/UI/RatingInd/RatingInd";
import styles from './stylesStart.module.scss'
import CardFilm from "../../components/CardFilm/CardFilm";

export default function Start() {
	const dispatch = useDispatch();
	const slides = [
		{ url: 'https://masterpiecer-images.s3.yandex.net/f78d0bb06fd911eeb7a9261105627a54:upscaled' },
		{ url: 'https://www.nastol.com.ua/pic/201702/1920x1200/nastol.com.ua-207574.jpg' },
		{ url: 'https://masterpiecer-images.s3.yandex.net/20e549c38dae11ee9d9456181a0358a2:upscaled' },
		{ url: 'https://st.depositphotos.com/1441511/4815/i/450/depositphotos_48154545-stock-photo-woman-showing-perfect-buttocks.jpg' },
		{ url: 'https://photochki.pro/uploads/posts/2022-09/thumbs/1662222792_1-photochki-pro-p-krasivie-siski-krupnim-planom-krasivaya-er-1.jpg' }
	]
	const getSlider = (collection, title) => {
		return (
			Boolean(collection.length)
				? <Slider slides={collection} title={title}></Slider>
				: 'ошибка загрузки данных с сервера, простите'
		)
	}

	useEffect(() => {
		console.log('effect');
		dispatch(getTopFilms());
		dispatch(getTop200Films());
	}, []);

	const { topFilms } = useSelector(store => store.filmsInfo.topFilmsInfo);
	const { top200Films } = useSelector(store => store.filmsInfo.top200FilmsInfo);


	return (
		<section className={styles.startPage}>
			<div className={styles.filter}></div>
			<div className={styles.sliders}>
				{getSlider(topFilms, 'топ новинок')}
				{getSlider(top200Films, 'топ 200 фильмов')}
			</div>
		</section>
	)
}