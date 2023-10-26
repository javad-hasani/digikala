import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ChangerNumToPersian from "../../Utils/ChangerNumToPersian";
import { FreeMode, Navigation } from "swiper";
import "./BestsellingProducts.css";

const BestsellingProducts = () => {
  return (
    <div className="bestselling-products-cotainer margin-1024">
      <div className="bestselling-products-title">
        <h3>پرفروش ترین کالاها</h3>
        <a href="#">مشاهده همه</a>
      </div>
      <Swiper
        className="bestselling-products-slider"
        modules={[FreeMode, Navigation]}
        navigation={true}
        freeMode={true}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 5,
          },
          470: {
            slidesPerView: 1.5,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 3,
          },
          1096: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
                <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(1)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(2)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(3)}</span>
              <div>
              <p></p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(4)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(5)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(6)}</span>
              <div>
              <p></p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(7)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(8)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(6)}</span>
              <div>
              <p></p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(10)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(11)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
              <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(12)}</span>
              <div>
                <p></p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
                <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(13)}</span>
              <div>
                <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(14)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(15)}</span>
              <div>
              <p></p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bestselling-products-items">
            <a href="#">
              <div className="img-container">
                <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(16)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(17)}</span>
              <div>
              <p></p>
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <span>{ChangerNumToPersian(18)}</span>
              <div>
              <p></p>
              </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BestsellingProducts;
