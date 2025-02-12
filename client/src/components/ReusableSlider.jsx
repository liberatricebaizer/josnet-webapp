import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const ReusableSlider = ({ images, delay = 3000 }) => {
  return (
    <div className="slider-container mx-auto max-w-[800px] w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1} // Display only one image at a time
        navigation
        autoplay={{ delay: delay, disableOnInteraction: false }} // Autoplay configuration
        loop={true} // Enables continuous loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={`Slide ${index}`}
              className="w-full h-[30.5rem] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReusableSlider;
