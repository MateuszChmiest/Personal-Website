import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper";
import CardSwiper from "./CardSwiper";
// Images
import project1 from "../../asstes/project1.png";
import project2 from "../../asstes/project2.png";
import project3 from "../../asstes/project3.png";
import project4 from "../../asstes/project4.png";
import project5 from "../../asstes/project5.png";

const Carousel = () => {
	return (
		<div className={""}>
			<Swiper
				freeMode={true}
				grabCursor={true}
				pagination={true}
				navigation={true}
				modules={[FreeMode, Pagination, Navigation]}
				className='mySwiper'
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					976: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					1440: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				}}>
				<SwiperSlide>
					<CardSwiper name={"YourServiceBook"} image={project1} hrefDemo="https://your-service-book.vercel.app/" hrefCode={"https://github.com/MateuszChmiest/YourServiceBook"}/>
				</SwiperSlide>
				<SwiperSlide>
					<CardSwiper name={"Oddaj w dobre ręce"} image={project2} hrefDemo={"https://oddaj-w-dobre-rece.vercel.app/"} hrefCode={"https://github.com/MateuszChmiest/Oddaj-w-dobre-rece"}/>
				</SwiperSlide>
				<SwiperSlide>
					<CardSwiper name={"WeatherReactApp"} image={project3} hrefDemo={"https://the-weather-react-app.vercel.app/"} hrefCode={"https://github.com/MateuszChmiest/WeatherReactApp"}/>
				</SwiperSlide>
				<SwiperSlide>
					<CardSwiper name={"BestShop"} image={project4} hrefDemo={"https://bestshop-project-mateuszchmiest.netlify.app/"} hrefCode={"https://github.com/MateuszChmiest/BestShop-RWD-Project"}/>
				</SwiperSlide>
				<SwiperSlide>
					<CardSwiper name={"MateuszChmiest.pl"} image={project5} hrefDemo={"https://mateuszchmiest.vercel.app/"} hrefCode={"https://github.com/MateuszChmiest/Personal-Website"}/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Carousel;
