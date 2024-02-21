import react, { useEffect } from "react";
import styles from './stylesFilter.module.scss'
import { FormControl, Select, MenuItem, InputLabel, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import { useDispatch } from "react-redux";



export default function Filter(props) {
	const dispatch = useDispatch();
	console.log(props);

	const { setCountries, setOrder, setType } = props.handlers;
	const { country, order, type } = props.states;

	function handleType(e) {
		console.log('HANDLETYPE', e.target.value);
		dispatch(setType(e.target.value))
	}

	return (
		<>
			<div>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Films/Series</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={'value'}
						label="фильмы\сериалы"
						onChange={() => console.log('handle')}
					>
						<MenuItem defaultChecked value={'x'}>x</MenuItem>
						<MenuItem value={'z'}>z</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className={styles.countries}>
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
		</>
	)
}	