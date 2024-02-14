import react, { useState } from "react";
import styles from './stylesRatingInd.module.scss'
import stars from '../../../assets/img/Безымянный.png'


export default function RatinInd({ rating }) {

	const width = rating * 10;
	console.log(width);

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.stars}>
					<img src={stars} alt="stars" />
				</div>
				<span className={styles.indicator} style={{ width: `${width}%` }}></span>
			</div>
			<button onClick={() => setWidth(width + 2)}>+</button>
		</>
	)
}