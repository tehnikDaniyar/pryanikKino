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
import { setOrder, setCountries, setType } from "../../redux/slices/filterSlice";
import Filter from "../../components/Filter/Filter";
import { getSearchedFilms } from "../../redux/slices/filmsInfoSlice";


export default function Films() {
	console.log('FILMS')

	const paramId = useParams().id;
	const collectionName = useParams().collection;
	const searchQuery = useParams().searchQuery;
	const isMobile = useSelector(store => store.states.isMobile);
	const dispatch = useDispatch();
	const films = useSelector(store => store.filmsInfo.films);
	const categories = useSelector(store => store.filmsInfo.categories)
	const catIsLoading = useSelector(store => store.filmsInfo.catIsLoading);
	const currentPage = useSelector(store => store.filmsInfo.currentPage);
	const { totalPages, countries } = useSelector(store => store.filmsInfo);
	const { country, order, type } = useSelector(store => store.filter);


	const titleName = () => {
		if (paramId) {
			return Boolean(categories.length) && categories[paramId - 1].genre
		} else {
			return collectionName;
		}
	};

	useEffect(() => {
		if (paramId) {
			dispatch(getFilms({ id: paramId, page: currentPage, country: country, order: order, type: type, }))
		} else if (collectionName) {
			dispatch(getCollection({ page: currentPage, collectionName: collectionName }))
		} else if (searchQuery) {
			dispatch(getSearchedFilms({ page: currentPage, query: searchQuery }))
		}


	}, [paramId, currentPage, order, type, country, searchQuery]);


	const handleChange = (e, v) => {
		dispatch(setCurrentPage(v))
	}

	return (
		<>
			<h1 className={styles.title}>{titleName()} </h1>
			<h2 className={styles.type}>{type === "FILM" ? 'Фильмы' : "Сериалы"}</h2>

			{
				paramId &&

				<Filter
					handlers={{ setCountries, setOrder, setType }}
					states={{ country, order, type, countries }}
				/>
			}

			<div className={styles.paginatioin_wrapper}>
				<Pagination
					boundaryCount={0}
					count={totalPages}
					size={`${isMobile ? 'small' : 'large'}`}
					className={styles.pagination}
					page={currentPage}
					onChange={handleChange}
					variant="outlined"
					shape="rounded"
					color="secondary"
					id="pagination-films"
				></Pagination>
			</div>


			<div className={styles.wrapper}>
				{
					Boolean(films.length)
						? films.map(item => <CardFilm key={item.kinopoiskId || item.filmId} item={item} ></CardFilm>)
						: <h2>Ожидание загрузки</h2>
				}
			</div>

			<div className={styles.paginatioin_wrapper}>
				<Pagination
					count={totalPages}
					size={`${isMobile ? 'small' : 'large'}`}
					className={styles.pagination}
					page={currentPage}
					onChange={handleChange}
					variant="outlined"
					shape="rounded"
					color="secondary"
					id="pagination-films"
				></Pagination>
			</div>

		</>

	)
}