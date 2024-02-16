import react, { useState } from "react";
import styles from './stylesRatingInd.module.scss'
import stars from '../../../assets/img/stars.png'


export default function RatinInd({ rating }) {

	const width = rating * 10;

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.stars}>
					<img src={stars} alt="stars" />
				</div>
				<span className={styles.indicator} style={{ width: `${width}%` }}></span>
			</div>
		</>
	)
}