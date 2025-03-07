// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import { Navigation, Autoplay } from "swiper/modules";

// const ReusableSlider = ({ cards, delay = 3000 }) => {
//   return (
//     <div className="slider-container mx-auto max-w-[800px] w-full">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         spaceBetween={10}
//         slidesPerView={1} // Display only one card at a time
//         navigation
//         autoplay={{ delay: delay, disableOnInteraction: false }} // Autoplay configuration
//         loop={true} // Enables continuous loop
//       >
//         {cards.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex flex-co w-full h-[30.5rem] items-center p-4 bg-white rounded-lg shadow-lg">
//               <img
//                 src={card.imageUrl}
//                 alt={`Card ${index}`}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//               <div>
//                 <h3 className="text-lg font-bold mt-2">{card.title}</h3>
//                 <p className="text-sm text-gray-600">{card.description}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ReusableSlider;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ReusableSlider = ({ cards, delay = 3000 }) => {
  return (
    <div className="slider-container w-full">
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
        {cards?.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-96">
              {/* Left content */}
              <div className="z-10 w-1/2 pl-6 md:pl-12 flex flex-col justify-center space-y-4">
                <p className="text-green-800 text-sm">{card.date}</p>
                <h2 className="text-3xl md:text-5xl font-serif text-green-800">
                  {card.title}
                </h2>
                <p className="text-xl md:text-2xl font-serif text-green-800">
                  {card.description}
                </p>
                <div>
                  <button className="px-6 py-2 text-white bg-green-800 hover:bg-green-700 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Right image */}
              <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
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

export default ReusableSlider;
