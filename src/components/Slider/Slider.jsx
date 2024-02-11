import react from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import styles from './stylesSlider.module.scss'




export default function Slider({ slides }) {

	const swipperSlides = slides.map(slideInfo => {
		return (
			<SwiperSlide key={slideInfo.url}>
				<img className={styles.img} key={slideInfo.url} src={slideInfo.url} alt="slide image" />
			</SwiperSlide>
		)
	})

	console.log(swipperSlides);

	return (
		<>
			<div className={styles.wrapper}>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
					loop={true}
					direction="horizontal"
					autoplay={{
						delay: '400',
						disableOnInteraction: true
					}}

				>
					{
						swipperSlides
					}
				</Swiper>
			</div >

		</>
	)
}