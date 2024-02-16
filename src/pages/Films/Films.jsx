import react, { useEffect } from "react";
import styles from './stylesFilms.module.scss'
import CardFilm from "../../components/CardFilm/CardFilm";
import { useSelector, useDispatch } from "react-redux";
import { getFilms } from "../../redux/slices/filmsInfoSlice";
import { useParams } from "react-router-dom";

export default function Films() {
	console.log('FILMS')
	const paramId = useParams().id;
	console.log();
	const dispatch = useDispatch();
	const films = useSelector(store => store.filmsInfo.films);
	const { id, genre } = useSelector(store => store.states.curentCategoryFilms);
	const categories = useSelector(store => store.filmsInfo.categories)

	useEffect(() => {
		dispatch(getFilms(paramId))
	}, [paramId])



	return (
		<>
			<h1 className={styles.title}>{Boolean(categories.length) && categories[paramId - 1].genre} </h1>

			<div className={styles.wrapper}>
				{
					Boolean(films.length)
						? films.map(item => <CardFilm key={item.kinopoiskId} item={item} ></CardFilm>)
						: <h2>Ожидание загрузки</h2>
				}
			</div>

		</>

	)
}