import react from "react";
import Slider from "../../components/Slider/Slider";


export default function Start() {

	const slides = [
		{ url: 'https://masterpiecer-images.s3.yandex.net/f78d0bb06fd911eeb7a9261105627a54:upscaled' },
		{ url: 'https://www.nastol.com.ua/pic/201702/1920x1200/nastol.com.ua-207574.jpg' },
		{ url: 'https://masterpiecer-images.s3.yandex.net/20e549c38dae11ee9d9456181a0358a2:upscaled' }
	]

	return (
		<>
			<h1>START PAGE</h1>
			<Slider slides={slides}></Slider>
		</>
	)
}