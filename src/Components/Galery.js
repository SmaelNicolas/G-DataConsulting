import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Galery.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const Galery = () =>{
  return (
    <>
      <Swiper
        effect={"coverflow"}
        rewind={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}