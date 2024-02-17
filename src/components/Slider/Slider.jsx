import react, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import styles from './stylesSlider.module.scss'
import { Navigation, Autoplay } from 'swiper/modules';
import RatinInd from "../UI/RatingInd/RatingInd";
import { useDispatch } from "react-redux";
import { copyCollectionInFilms } from "../../redux/slices/filmsInfoSlice";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




export default function Slider({ slides, title, collectionKey }) {

	const dispatch = useDispatch();

	const swipperSlides = slides.map(slideInfo => {
		return (
			<SwiperSlide
				key={slideInfo.kinopoiskId}
				className={styles.swiperSlide}
			>
				<img className={`${styles.image} _ibg`}
					key={slideInfo.kinopoiskId}
					src={slideInfo.posterUrlPreview}
					alt="slide image"
					onClick={() => console.log(slideInfo.kinopoiskId)}
				/>
				<RatinInd rating={slideInfo.ratingKinopoisk} width='70%'></RatinInd>
			</SwiperSlide>
		)
	})


	return (<>
		<h2 className={styles.title} onClick={() => dispatch(copyCollectionInFilms(collectionKey))}>
			<Link to={`/films/collections/${collectionKey}`}>
				{title}
			</Link>
		</h2>
		<Swiper
			modules={[Navigation, Autoplay]}
			spaceBetween={20}
			breakpoints={{
				480: { slidesPerView: 1.5, spaceBetween: 10 },
				767: { slidesPerView: 2.5, spaceBetween: 15 },
				980: { slidesPerView: 3.0, spaceBetween: 20 },
				1400: { slidesPerView: 3.5, spaceBetween: 20 },
			}}
			navigation={{ nextEl: '#next', prevEl: '#prev' }}
			className={styles.swiper}
			speed={1800}
			autoplay={{ delay: 2000, disableOnInteraction: false }}
			loop={true}
		>
			{swipperSlides}
			<div className={styles.btns}>
				<button className={styles.prev} id="prev">PREV</button>
				<button className={styles.next} id="next">NEXT</button>
			</div>

		</Swiper>

	</>
	)
}