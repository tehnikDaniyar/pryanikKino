import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
// import { Link } from 'react-router-dom';
import filmsServices from '../../API/filmsServices';
import { getFilmsCategories } from '../../redux/slices/filmsInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurentCategoryFilms } from '../../redux/slices/statesSlice';
import { setCurrentPage } from '../../redux/slices/filmsInfoSlice';
import { setCountries } from '../../redux/slices/filterSlice';


export default function Categories() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFilmsCategories());
	}, [])

	const [isOpen, setisOpen] = useState(false);
	const categories = useSelector(store => store.filmsInfo.categories);

	return (
		<>
			<div
				className={`${styles.wrapper} ${isOpen ? `${styles.open}` : ''}`}
				onClick={() => setisOpen(!isOpen)}
			>
			</div>
			<aside
				className={`${styles.categories} ${isOpen ? `${styles.open}` : 'close'}`}
				onClick={() => setisOpen(!isOpen)}
			>
				<div className={styles.links}>
					{
						categories.length && categories.map(cat => {
							return (
								<Link
									key={cat.id}
									to={`/films/${cat.id}`}
									onClick={() => {
										dispatch(setCurentCategoryFilms({ id: cat.id, genre: cat.genre }));
										dispatch(setCurrentPage(1));
										dispatch(setCountries(''));
									}}
									className={styles.link}
								>
									{cat.genre}
								</Link>
							)
						})
					}
				</div>
				<div className={styles.icon} >
					<svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" /></svg>
				</div>
				<h3 className={styles.title}>Категории</h3>
			</aside>
		</>
	)
}