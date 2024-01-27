import react, { useState } from "react";
import styles from "./styles.module.scss"
import { Link } from "react-router-dom";

export default function Header() {


	return (
		<div className={styles.header}>
			<div className={styles.logo}>

			</div>
			<nav className={styles.navigation}>
				<Link to="/">Home</Link>
			</nav>

		</div>
	)
}