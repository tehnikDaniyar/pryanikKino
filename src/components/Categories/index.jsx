import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
// import { Link } from 'react-router-dom';
import filmsServices from '../../API/filmsServices';
import { getFilmsCategories } from '../../redux/slices/filmsInfoSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Categories() {
	console.log('CATEGORIES');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFilmsCategories());
	}, [])

	const [isOpen, setisOpen] = useState(false);
	const categories = useSelector(store => store.filmsInfo.categories);
	console.log(categories.length);

	return (
		<div className={
			`${styles.categories}
			 ${isOpen
				? `${styles.open}`
				: 'close'}`
		}
			onClick={() => setisOpen(!isOpen)}
		>
			<div className={styles.links}>
				{
					categories.length && categories.map(cat => <a key={cat.id}>{cat.genre}</a>)
				}
			</div>
			<div className={styles.icon} >

			</div>
			<h3 className={styles.title}>Категории</h3>
		</div>
	)
}