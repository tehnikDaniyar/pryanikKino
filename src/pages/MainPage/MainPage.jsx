import styles from "./stylesMainPage.module.scss"
import Header from "../../components/Header/Header"
import { useSelector, useDispatch } from "react-redux"
import Categories from '../../components/Categories/index.jsx'
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { getTop200Films, getTopFilms } from "../../redux/slices/filmsInfoSlice.js"
import { getCollection } from "../../redux/slices/filmsInfoSlice.js"
import { setCurrentPage } from "../../redux/slices/filmsInfoSlice.js"


export default function MainPage() {
	console.log("MAINPAGE");
	window.scrollTo(0, 0)

	const { isCover, coverUrl } = useSelector(store => store.states.coverInfo)
	const themeMode = useSelector(store => store.states.themeMode)


	return (
		<div
			className={`${styles.mainpage} ${themeMode === 'dark' ? `${styles.dark}` : `${styles.day}`}`}
			style={
				isCover && coverUrl.length > 0
					? { backgroundImage: `url(${coverUrl})`, backgroundPosition: 'top', backgroundRepeat: "repeat", objectPosition: 'fill' }
					: { backgroundImage: `none` }
			}
		>
			<Header></Header>
			<Categories></Categories>
			<div className={styles.content}>
				<Outlet></Outlet>
			</div>

		</div>
	)
}