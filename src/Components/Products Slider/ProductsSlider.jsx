import React from "react";
import "./ProductsSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { HiArrowLeft, HiChevronLeft } from "react-icons/hi";
import ChangerNumToPersian from "../../Utils/ChangerNumToPersian";
import { useEffect } from "react";
import { fetchProductsSlider } from "../../Features/ProductSlider/ProductSliderSlice";
import { useDispatch, useSelector } from "react-redux";


const ProductsSlider = () => {
  // Get the 'productsSlider' data from the Redux store
  const { productsSlider } = useSelector((state) => state.productSlider);

  // Get access to the Redux dispatch function
  const dispatch = useDispatch();

  // Fetch products for the slider on component mount
  useEffect(() => {
    dispatch(fetchProductsSlider());
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount


  return (
    <>
      <Swiper
        className="swiper-products max-width-2 margin-1024"
        navigation
        freeMode={true}
        modules={[FreeMode, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2.4,
            spaceBetween: 5,
          },
          470: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          1096: {
            slidesPerView: 7.1,
            spaceBetween: 2,
          },
        }}
      >
        <SwiperSlide className="product-item">
          <div className="img-container suggestion">
            <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
          <div className="img-container suggestion-box">
            <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
          <div>
            <a href="#">
              <span>مشاهده همه </span>
              <HiChevronLeft className="icon" />
            </a>
          </div>
        </SwiperSlide>
        {productsSlider.map((product) => {
          return (
            <SwiperSlide key={product.id} className="product-item">
              <a href="#">
                <div className="product-img-container">
                  <img src={product.image} alt="" />
                </div>
                <div className="price-container">
                  <div className="discount-box">
                    <span className="amount-discount">
                      {ChangerNumToPersian(product.discount)}%
                    </span>
                    <span>
                      {ChangerNumToPersian(
                        product.price - (product.price * product.discount) / 100
                      )}
                    </span>
                  </div>
                  <div className="price-box">
                    <span>{ChangerNumToPersian(product.price)}</span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
        <SwiperSlide className="product-item">
          <a href="#">
            <span>
              <HiArrowLeft />
            </span>
            <span>دیدن همه  </span>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductsSlider;
