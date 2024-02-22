import react, { useState } from "react";
import styles from "./styles.module.scss"
import { Switch } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setThemeMode } from "../../redux/slices/statesSlice";
import { Link } from "react-router-dom";
import Search from "../Search/Search"
import { setSearchQuery } from "../../redux/slices/statesSlice";

export default function Header() {
	const { themeMode, searchQuery } = useSelector(store => store.states);


	const [checked, setChecked] = useState(themeMode == 'dark' ? true : false);
	const dispatch = useDispatch();

	const toggleTheme = () => {
		setChecked(!checked);

		if (checked) {
			dispatch(setThemeMode('light'));
		} else {
			dispatch(setThemeMode('dark'));
		}
	};

	function handlerSearch(e) {
		dispatch(setSearchQuery(e.target.value))
	};


	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link to='/' className={styles.link}>PryanikKino</Link>
			</div>

			<div className={styles.search}>
				<Search
					state={searchQuery}
					handler={handlerSearch}
				/>
			</div>

			<div className={styles.switchTheme}>
				<span>Ночная тема</span>
				<Switch
					onChange={toggleTheme}
					checked={checked}
				></Switch>
			</div>
		</header>
	)
}