import react, { useEffect, useState } from "react";
import styles from './stylesFilter.module.scss'
import { FormControl, Select, MenuItem, InputLabel, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import { useDispatch } from "react-redux";


export default function Filter(props) {
	const dispatch = useDispatch();
	console.log(props);

	const [isOpen, setIsOpen] = useState(false);
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
			<div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
				<span className={`${styles.burger} ${isOpen ? styles.open : ''}`}><span></span></span>
				<h3>Отфильтровать результаты</h3>
			</div>
			<div className={`${styles.wrapper} ${isOpen ? styles.open : ''}`}>
				<div className={styles.order}>
					<FormControl fullWidth>
						<InputLabel id="select-filter-label">Сортировка по</InputLabel>
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
						<FormLabel id="radio-filter-label">Что будем смотреть?</FormLabel>
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
						<InputLabel id="select-filter-label-countries">Выбрать страну</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={country}
							onChange={handleCountry}
							style={{ color: 'white' }}
						>
							{
								countries.map(country => {

									return <MenuItem key={country.id} value={country.id} >{country.country}</MenuItem>
								})
							}
						</Select>
					</FormControl>
				</div>

			</div >

		</>
	)
}	