import react from "react";
import styles from './stylesSearch.module.scss'
import { Link } from "react-router-dom";


export default function Search({ state, handler }) {



	return (

		<div className={styles.wrapper}>
			<input
				type="text"
				value={state}
				onChange={(e) => handler(e)}
				className={styles.input}
			/>
			<div className={styles.searchIcon}>
				{
					state &&
					<Link to={`/search_results/${state}`}>searchIcon</Link>
				}
			</div>

		</div>



	)
}