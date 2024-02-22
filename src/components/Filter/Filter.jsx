import react, { useEffect } from "react";
import styles from './stylesFilter.module.scss'
import { FormControl, Select, MenuItem, InputLabel, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import { useDispatch } from "react-redux";



export default function Filter(props) {
	const dispatch = useDispatch();
	console.log(props);

	const { setCountries, setOrder, setType } = props.handlers;
	const { country, order, type, countries } = props.states;
	console.log(countries);

	function handleType(e) {
		console.log('HANDLETYPE', e.target.value);
		dispatch(setType(e.target.value))
	}

	function handleOrder(e) {
		dispatch(setOrder(e.target.value))
	}

	function handleCountry(e) {
		dispatch(setCountries(e.target.value))
	}

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.order}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Сортировка по</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={order}
							label="фильмы\сериалы"
							onChange={handleOrder}
						>
							<MenuItem defaultChecked value={'RATING'}>Рейтингу</MenuItem>
							<MenuItem value={'YEAR'}>Году</MenuItem>
							<MenuItem value={'NUM_VOTE'}>Нумерации</MenuItem>
						</Select>
					</FormControl>
				</div>

				<div className={styles.type}>
					<FormControl>
						<FormLabel id="demo-radio-buttons-group-label">Что будем смотреть?</FormLabel>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="FILM"
							name="radio-buttons-group"
							onChange={handleType}
						>
							<FormControlLabel value="FILM" control={<Radio />} label="Фильмы" />
							<FormControlLabel value="TV_SERIES" control={<Radio />} label="Сериалы" />
						</RadioGroup>
					</FormControl>
				</div>

				<div className={styles.countries}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Выбрать страну</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={country}
							label="фильмы\сериалы"
							onChange={handleCountry}
						>
							{
								countries.map(country => {

									return <MenuItem value={country.id}>{country.country}</MenuItem>
								})
							}
						</Select>
					</FormControl>
				</div>


			</div>

		</>
	)
}	