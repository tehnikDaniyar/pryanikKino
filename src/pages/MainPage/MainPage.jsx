import styles from "./stylesMainPage.module.scss"
import Header from "../../components/Header/Header"
import { useSelector } from "react-redux"
import Categories from '../../components/Categories/index.jsx'
import { Outlet } from "react-router-dom"

export default function MainPage() {

	const themeMode = useSelector(store => store.states.themeMode)

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