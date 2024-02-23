import react, { useState } from "react";
import styles from './stylesSearch.module.scss'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsShowSearch } from "../../redux/slices/statesSlice";


export default function Search({ state, handler }) {
	const dispatch = useDispatch();
	const isShow = useSelector(store => store.states.isShowSearch);
	// const [isShow, setIsShow] = useState(false);

	console.log(isShow);

	return (
		<>
			<div
				className={`${styles.wrapper} ${isShow ? styles.show : ""}`}
				onClick={() => dispatch(setIsShowSearch(false))}
			>
				<input
					type="text"
					value={state}
					onChange={(e) => handler(e)}
					className={styles.input}
					onClick={(e) => e.stopPropagation()}
				/>
				<div className={styles.searchIcon}>
					{
						state &&
						<Link to={`/search_results/${state}`}>searchIcon</Link>
					}
				</div>
			</div>

			<div
				className={styles.searchMobileIcon}
				onClick={() => dispatch(setIsShowSearch(true))}
			>
				SEARCH
			</div>

		</>




	)
}