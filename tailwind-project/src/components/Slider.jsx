import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import slider01 from "../images/slide1.jpg";
import slider02 from "../images/slide2.jpg";
import slider03 from "../images/slide3.jpg";
import SlideGallery from "./SlideGallery";

const Slider = () => {
  return (
    <div className="pt-4">
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <Swiper
            slidesPerView={1}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper aspect-video rounded-2xl "
          >
            <SwiperSlide>
              <img src={slider01} alt="slider01" className="w-full h-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider02} alt="slider02" className="w-full h-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider03} alt="slider03" className="w-full h-full" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-1">
          <SlideGallery />
        </div>
      </div>
    </div>
  );
};

export default Slider;
