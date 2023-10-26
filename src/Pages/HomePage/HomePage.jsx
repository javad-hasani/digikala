
import { HiArrowLeft, HiChevronLeft } from "react-icons/hi";
import BestsellingProducts from "../../Components/Bestselling Products/BestsellingProducts";
import DiscountedProducts from "../../Components/Discounted Products/DiscountedProducts";
import HeaderSlider from "../../Components/Header Slider/HeaderSlider";
import MoreServices from "../../Components/More Services/MoreServices";
import PopularBrandsSlider from "../../Components/Popular Brands Slider/PopularBrandsSlider";
import ProductsSlider from "../../Components/Products Slider/ProductsSlider";
import SuggestionSlider from "../../Components/Suggestion Slider/SuggestionSlider";
import Layout from "../../Layout/Layout/Layout";
import ChangerNumToPersian from "../../Utils/ChangerNumToPersian";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Layout>
      <HeaderSlider />
      <main className=" main-container-home max-width">
        <MoreServices />
        <ProductsSlider />
        {/* Amazing SuperMArket */}
        <a href="#" className="amazing-supermarket margin">
          <header>
            <div className="hidden">تا {ChangerNumToPersian(0)}% تخفیف</div>
            <div>
              <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
            </div>
            <div>
            <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
            </div>
          </header>
          <main>
            <span className="icon">
              <HiArrowLeft className="HiArrowLeft" />
              <span className="hidden">
                بیش از {ChangerNumToPersian(0)} کالا
              </span>
            </span>
            <div id="container-amazing-product">
              <a href="#">
                <div>
                <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
                </div>
                <span>{ChangerNumToPersian(0)}%</span>
              </a>
              <a href="#">
                <div>
                <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
                </div>
                <span>{ChangerNumToPersian(0)}%</span>
              </a>
              <a href="#">
                <div>
                <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
                </div>
                <span>{ChangerNumToPersian(0)}%</span>
              </a>
              <a href="#" className="hidden">
                <div>
                <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
                </div>
                <span>{ChangerNumToPersian(0)}%</span>
              </a>
              <a href="#" className="hidden">
                <div>
                <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
                </div>
                <span>{ChangerNumToPersian(0)}%</span>
              </a>
              <a href="#" className="hidden">
                <div>
                <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
                </div>
                <span>{ChangerNumToPersian(0)}%</span>
              </a>
            </div>
          </main>
        </a>
        {/* suggestion Image */}
        <section className=" suggestion-container margin">
          <a href="#">
          <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
          </a>
          <a href="#">
          <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
          </a>
          <a href="#">
          <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
          </a>
          <a href="#">
          <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
          </a>
        </section>
        {/*  Category */}
        <section className="category-container margin">
          <h3>دسته بندی های فروشگاه</h3>
          <main>
            <a href="#">
              <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
            <a href="#">
            <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <p>پیش فرض</p>
            </a>
          </main>
          <section className="img-section-1">
          <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
            </div>
            <div>
              <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
            </div>
          </section>
        </section>
        <SuggestionSlider />
        <PopularBrandsSlider />
        <section className="img-section-2 margin">
          <div>
          <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
          </div>
          <div>
          <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt=""
              />
          </div>
        </section>


      
     
    
        {/* Bestselling Products */}
        <BestsellingProducts />
        {/* Imgae */}
        <div className="margin border-radius">
          <picture>
            <source
              srcSet=""
              media="(min-width:1024px)"
            />
            <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </picture>
        </div>
        {/* DiscountedProducts */}
        <DiscountedProducts />
        {/* Reading */}
        <section className="reading-container margin">
          <header className="reading-header">
            <h4>خواندنی ها</h4>
            <a href="#">
               بیشتر 
              <HiChevronLeft className="icon" />
            </a>
          </header>
          <main>
            <a href="#" className="reading-items">
              <div className="reading-img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <div className="description-box">
              <p></p>
              </div>
            </a>
            <a href="#" className="reading-items">
              <div className="reading-img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <div className="description-box">
                <p></p>
              </div>
            </a>
            <a href="#" className="reading-items">
              <div className="reading-img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <div className="description-box">
                <p></p>
              </div>
            </a>
            <a href="#" className="reading-items">
              <div className="reading-img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
              <div className="description-box">
                <p>
                
                </p>
              </div>
            </a>
          </main>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
