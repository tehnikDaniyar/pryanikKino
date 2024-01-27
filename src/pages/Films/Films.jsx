import react from "react";
import styles from './stylesFilms.module.scss'
import { Link } from "react-router-dom";

export default function Films() {
	return (
		<div className="films">
			<h1>Films</h1>
			<div className={styles.links}>
				<Link to="kino">test kino link</Link>
			</div>
		</div>
	)
}