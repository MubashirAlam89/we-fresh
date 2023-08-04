// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { ServiceCard } from "./serviceCard";
import { cartogoryCardsData } from "@/constants/data";

export const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={30}
      loop={true}
      grabCursor={true}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full bg-blue-100 "
    >
      {cartogoryCardsData.map((e, i) => {
        return (
          <SwiperSlide key={i} className="w-fit">
            <div className="bg-white">
              <ServiceCard src={e.imgSrc} title={e.title} />
            </div>
          </SwiperSlide>
        );
      })}

      {/* <SwiperSlide className="w-fit">
        <ServiceCard src="/grocery.png" title="Grocery" />
      </SwiperSlide>
      <SwiperSlide className="w-fit">
        <ServiceCard src="/cafe.png" title="Cafe" />
      </SwiperSlide>
      <SwiperSlide className="w-fit">
        <ServiceCard src="/food.png" title="Food" />
      </SwiperSlide> */}
    </Swiper>
  );
};
