import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper";
import CardSwiper from "./CardSwiper";

const Carousel = () => {
	return (
		<div className={""}>
			<Swiper
				freeMode={true}
				grabCursor={true}
                pagination={true}
                navigation={true}
				modules={[FreeMode, Pagination ,Navigation]}
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
                    }
                }}>
				<SwiperSlide>
					<CardSwiper/>
				</SwiperSlide>
				<SwiperSlide>
					<h1>Slide 1</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1>Slide 1</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1>Slide 1</h1>
				</SwiperSlide>
				<SwiperSlide>
					<h1>Slide 1</h1>
				</SwiperSlide>
                <SwiperSlide>
                        <h1>Slide 1</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Slide 1</h1>
                    </SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Carousel;
