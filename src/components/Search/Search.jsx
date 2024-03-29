import styles from './stylesSearch.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsShowSearch } from "../../redux/slices/statesSlice";
import searchIcon from '../../assets/img/search.svg'

export default function Search({ state, handler }) {
	const dispatch = useDispatch();
	const isShow = useSelector(store => store.states.isShowSearch);
	const navigate = useNavigate();

	function keyDownHandler(e) {
		if (e.key == 'Enter' && state) {
			navigate(`/search_results/${state}`, { replace: true });
		};
	};

	return (
		<>
			<div
				className={`${styles.wrapper} ${isShow ? styles.show : ""} `}
				onClick={() => dispatch(setIsShowSearch(false))}
			>
				<input
					type="text"
					value={state}
					onChange={(e) => handler(e)}
					className={styles.input}
					onClick={(e) => e.stopPropagation()}
					onKeyDown={(e) => keyDownHandler(e)}
					placeholder="Поиск"
				/>
				<div className={styles.searchIcon}>
					{
						state &&
						<Link to={`/search_results/${state}`}>
							<img src={searchIcon} alt="search" />
						</Link>
					}
				</div>
			</div>

			<div
				className={styles.searchMobileIcon}
				onClick={() => dispatch(setIsShowSearch(true))}
			>
				<img src={searchIcon} alt="search" />
			</div>

			<div
				className={`${styles.background} ${isShow ? `${styles.show}` : ''}`}
				onClick={() => dispatch(setIsShowSearch(false))}
			>
			</div>
		</>




	)
}