import React from "react";
import "./HeaderSlider.css";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeaderSlider() {
  return (
    <section className="slider-container">
      <Swiper
      
        className="swiper"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 6000,
          reverseDirection: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "active",
        }}
      >
        <SwiperSlide className="swiper-items">
          <picture>
          <source
              srcSet=""
              media="(min-width:764px)"
            />
            <source />
            <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
          <source
              srcSet=""
              media="(min-width:764px)"
            />
                <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
          <source
              srcSet=""
              media="(min-width:764px)"
            />
                <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
          <source
              srcSet=""
              media="(min-width:764px)"
            />
                 <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
          <source
              srcSet=""
              media="(min-width:764px)"
            />
                 <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
          <source
              srcSet=""
              media="(min-width:764px)"
            />
                 <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
            <source
              srcSet=""
              media="(min-width:764px)"
            />
            <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-items">
          <picture>
          <source
              srcSet=""
              media="(min-width:764px)"
            />
              <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
