import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Undraw = ({ undraws, delay = 3000 }) => {
  return (
    <div className="slider-container h-36  w-60">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-red-500",
        }}
        autoplay={{ delay: delay, disableOnInteraction: false }}
        loop={true}
        className="relative"
      >
        {undraws?.map((undraw, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex ">
              <div className="absolut top-0 right-0 overflow-hidden">
                <img
                  src={undraw.imageUrl}
                  alt={undraw.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Undraw;
