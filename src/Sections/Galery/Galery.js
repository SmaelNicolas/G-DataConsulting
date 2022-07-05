import { Swiper, SwiperSlide } from "swiper/react";
import work1 from '../../Assets/Imgs/work1.png';
import work2 from '../../Assets/Imgs/work2.png';
import work3 from '../../Assets/Imgs/work3.png';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Galery.scss";

import { EffectCoverflow, Pagination } from "swiper";
import { Title } from "../../Components/Title/Title";

export const Galery = () =>{
  return (
    <div id="work" className="darkBlue">
    
      <Title text={"Galeria de trabajos"} />

      <Swiper
        effect={"coverflow"}
        rewind={true}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={200}
        slidesPerView={"auto"}
        loop={true}
        autoplay= {{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <img src={work2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work3} alt="img" />
        </SwiperSlide>
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}