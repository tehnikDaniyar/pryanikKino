import react, { useState } from "react";
import styles from './stylesRatingInd.module.scss'
import stars from '../../../assets/img/stars.png'


export default function RatinInd({ rating, width }) {

	const starsCount = rating * 10;

	return (
		<>
			<div className={styles.wrapper} style={{ width: `${width}` }}>
				<div className={styles.stars}>
					<img src={stars} alt="stars" />
				</div>
				<span className={styles.indicator} style={{ width: `${starsCount}%` }}></span>
			</div>
		</>
	)
}