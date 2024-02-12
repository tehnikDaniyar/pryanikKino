import react from "react";
import Slider from "../../components/Slider/Slider";


export default function Start() {

	const slides = [
		{ url: 'https://masterpiecer-images.s3.yandex.net/f78d0bb06fd911eeb7a9261105627a54:upscaled' },
		{ url: 'https://www.nastol.com.ua/pic/201702/1920x1200/nastol.com.ua-207574.jpg' },
		{ url: 'https://masterpiecer-images.s3.yandex.net/20e549c38dae11ee9d9456181a0358a2:upscaled' },
		{ url: 'https://st.depositphotos.com/1441511/4815/i/450/depositphotos_48154545-stock-photo-woman-showing-perfect-buttocks.jpg' },
		{ url: 'https://photochki.pro/uploads/posts/2022-09/thumbs/1662222792_1-photochki-pro-p-krasivie-siski-krupnim-planom-krasivaya-er-1.jpg' }
	]

	return (
		<>
			<Slider slides={slides}></Slider>
		</>
	)
}