import { Swiper, SwiperSlide } from "swiper/react";
import work1 from "../../Assets/Imgs/work1.png";
import work2 from "../../Assets/Imgs/work2.png";
import work3 from "../../Assets/Imgs/work3.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Galery.scss";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Title } from "../../Components/Title/Title";

export const Galery = () => {
	return (
		<div id='work' className='darkBlue'>
			<Title text='galería de trabajos' />

			<Swiper
				effect={"coverflow"}
				rewind={true}
				grabCursor={true}
				centeredSlides={true}
				spaceBetween={150}
				slidesPerView={"auto"}
				loop={true}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={false}
				navigation={true}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<img src={work2} alt='img' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={work1} alt='img' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={work3} alt='img' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
