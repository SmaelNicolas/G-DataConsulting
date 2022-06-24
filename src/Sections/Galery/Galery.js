import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Galery.scss";

import { EffectCoverflow, Pagination } from "swiper";
import { Title } from "../../Components/Title/Title";

export const Galery = () =>{
  return (
    <div id="work">
    
      <Title text={"Galeria de trabajos"} />

      <Swiper
        effect={"coverflow"}
        rewind={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
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
          <img src="https://via.placeholder.com/150" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/150" alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}