import react, { useEffect } from "react";
import styles from './stylesFilms.module.scss'
import CardFilm from "../../components/CardFilm/CardFilm";
import { useSelector, useDispatch } from "react-redux";
import { getFilms } from "../../redux/slices/filmsInfoSlice";
import { useParams } from "react-router-dom";


export default function Films() {
	console.log('FILMS')
	const paramId = useParams().id;
	const collectionName = useParams().collection;
	const dispatch = useDispatch();
	const films = useSelector(store => store.filmsInfo.films);
	const categories = useSelector(store => store.filmsInfo.categories)
	console.log("collectionName", collectionName);

	const titleName = () => {
		if (paramId) {
			return Boolean(categories.length) && categories[paramId - 1].genre
		} else {
			return collectionName;
		}
	};

	useEffect(() => {
		if (paramId) {
			dispatch(getFilms(paramId))
		} else if (collectionName) {

		}
	}, [paramId]);


	return (
		<>
			<h1 className={styles.title}>{titleName()} </h1>

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