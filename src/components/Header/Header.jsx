import react, { useState } from "react";
import styles from "./styles.module.scss"
import { Switch } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setThemeMode } from "../../redux/slices/statesSlice";


export default function Header() {

	const [checked, setChecked] = useState(true);
	const dispatch = useDispatch();

	const toggleTheme = () => {
		setChecked(!checked);

		if (checked) {
			dispatch(setThemeMode('light'));
		} else {
			dispatch(setThemeMode('dark'));
		}
	};






	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				PryanikKino
			</div>
			<div className={styles.switchTheme}>
				<Switch
					onChange={toggleTheme}
					checked={checked}

				></Switch>
			</div>
		</div>
	)
}