import react from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import styles from './stylesSlider.module.scss'
import { Navigation, Autoplay } from 'swiper/modules';


export default function Slider({ slides }) {

	const swipperSlides = slides.map(slideInfo => {
		return (
			<SwiperSlide
				key={slideInfo.url}
				className={styles.swiperSlide}
			>
				<img className='_ibg' key={slideInfo.url} src={slideInfo.url} alt="slide image" />
			</SwiperSlide>
		)
	})

	console.log(swipperSlides);

	return (<>
		<h2 className={styles.title}>TITLE</h2>
		<Swiper
			// install Swiper modules
			modules={[Navigation, Autoplay]}
			spaceBetween={20}
			breakpoints={{
				480: { slidesPerView: 1.5, spaceBetween: 10 },
				767: { slidesPerView: 2.5, spaceBetween: 20 },
				980: { slidesPerView: 3.5, spaceBetween: 25 },
			}}
			navigation={{ nextEl: '#next', prevEl: '#prev' }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
			className={styles.swiper}
			speed={800}
			autoplay={{ delay: 1000, disableOnInteraction: false }}
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