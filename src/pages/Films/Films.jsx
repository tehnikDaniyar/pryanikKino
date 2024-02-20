import react, { useEffect } from "react";
import styles from './stylesFilms.module.scss'
import CardFilm from "../../components/CardFilm/CardFilm";
import { useSelector, useDispatch } from "react-redux";
import { getFilms } from "../../redux/slices/filmsInfoSlice";
import { useParams } from "react-router-dom";
import { copyCollectionInFilms } from "../../redux/slices/filmsInfoSlice";
import { setCurrentPage } from "../../redux/slices/filmsInfoSlice";
import { Pagination } from "@mui/material";
import { getCollection } from "../../redux/slices/filmsInfoSlice";

export default function Films() {
	console.log('FILMS')
	// dispatch()

	const paramId = useParams().id;
	const collectionName = useParams().collection;
	const dispatch = useDispatch();
	const films = useSelector(store => store.filmsInfo.films);
	const categories = useSelector(store => store.filmsInfo.categories)
	const catIsLoading = useSelector(store => store.filmsInfo.catIsLoading);
	const currentPage = useSelector(store => store.filmsInfo.currentPage);
	const totalPages = useSelector(store => store.filmsInfo.totalPages);



	const titleName = () => {
		if (paramId) {
			return Boolean(categories.length) && categories[paramId - 1].genre
		} else {
			return collectionName;
		}
	};

	useEffect(() => {
		if (paramId) {
			dispatch(getFilms({ id: paramId, page: currentPage }))
		} else if (collectionName) {
			dispatch(getCollection({ page: currentPage, collectionName: collectionName }))
		}


	}, [paramId, currentPage]);


	const handleChange = (e, v) => {
		dispatch(setCurrentPage(v))
	}

	return (
		<>
			<h1 className={styles.title}>{titleName()} </h1>
			<Pagination
				count={totalPages}
				size="large"
				className={styles.pagination}
				page={currentPage}
				onChange={handleChange}
				variant="outlined"
				shape="rounded"
				color="primary"
			></Pagination>

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