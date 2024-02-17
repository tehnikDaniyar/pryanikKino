import styles from "./stylesMainPage.module.scss"
import Header from "../../components/Header/Header"
import { useSelector, useDispatch } from "react-redux"
import Categories from '../../components/Categories/index.jsx'
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { getTop200Films, getTopFilms } from "../../redux/slices/filmsInfoSlice.js"


export default function MainPage() {

	const themeMode = useSelector(store => store.states.themeMode)
	const dispatch = useDispatch();



	return (
		<div className={`${styles.mainpage} ${themeMode === 'dark' ? `${styles.dark}` : ''}`}>
			<Header></Header>
			<Categories></Categories>
			<div className={styles.content}>
				<Outlet></Outlet>
			</div>
		</div>
	)
}