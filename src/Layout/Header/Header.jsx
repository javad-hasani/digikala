import React, { useState } from "react";
import "./Header.css";
import {
  HiArrowNarrowRight,
  HiArrowSmLeft,
  HiChevronDown,
  HiChevronLeft,
  HiLogin,
  HiMenu,
  HiOutlineShoppingCart,
  HiSearch,
}from "react-icons/hi";
import {
  HiMapPin,
  HiOutlineQuestionMarkCircle,
  HiOutlineXMark,
} from "react-icons/hi2";

import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiMove } from "react-icons/fi";
import { useRef } from "react";


// Component for the header of the application.
export default function Header() {
  // State to manage visibility of different elements.
  const [show, setShow] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openRegionBox, setOpenRegionBox] = useState(false);

  // Reference to the navigation element.
  const navigation = useRef();

  // Manage body overflow based on the visibility of different elements.
  if (openSupport || openSearchBar || openRegionBox || show) {
    document.body.style.overflow = "hidden"; // Lock scrolling.
  } else {
    document.body.style.overflow = ""; // Enable scrolling.
  }

  // Handler to open the header.
  const openHandle = () => setShow(true);

  // Handler to close the header.
  const closeHandle = () => setShow(false);

  // Handler to toggle the disclosure state.
  const disclosureHandler = (e) => {
    e.target.classList.toggle("open");
  };

  // Handler to handle hover events.
  const hoverhandler = (e) => {
    let attribute = e.target.getAttribute("data");
    navigation.current.classList = "";
    navigation.current.classList.add(attribute);
  };

  // Handler to handle mouse leave events.
  const mouseLeaveHandler = () => {
    navigation.current.classList.add("hide");
    setShow(false);
  };


  return (
    <header id="main-header">
      {/* Mobile Nav */}
      <div className="banner-mobile">
        <img
          src=""
          alt=""
        />
      </div>
      <nav className="mobile">
        <div className="top-nav">
          <div onClick={() => setOpenSupport(true)} className="question-icon">
            <HiOutlineQuestionMarkCircle />
          </div>
          <section className={`online-support ${openSupport && "open"} `}>
            <nav className="nav-support">
              <HiArrowSmLeft
                onClick={() => setOpenSupport(false)}
                className="icon"
              />
              <h3>پشتیبانی آنلاین</h3>
            </nav>
            <header className="header-support">
              <h3>سلام👋👋</h3>
              <p>
                 
                </p>
                <p>
                 
                 </p>
            </header>
            <main className="disclosure-container">
              <div onClick={(e) => disclosureHandler(e)} className="disclosure">
                <div>
                  <span></span>
                  <span>
                    <HiChevronDown className="icon" />
                  </span>
                </div>
                <hr />
                <p>
                 
                 </p>
              </div>
              <div onClick={(e) => disclosureHandler(e)} className="disclosure">
                <div>
                <span></span>
                </div>
                <hr />
                <p>
                 
                </p>
              </div>
              <div onClick={(e) => disclosureHandler(e)} className="disclosure">
                <div>
                <span></span>
                  <span>
                    <HiChevronDown className="icon" />
                  </span>
                </div>
                <hr />
                <p>
                
                </p>
              </div>
            </main>
            <footer>
              <div>
                <a href="#">جواب سوالتون رو پیدا نکردید؟</a>
                <button>
                  گفتگو با پشتیبان آنلاین
                  <HiChevronLeft className="icon" />
                </button>
              </div>
            </footer>
          </section>
          <div className="logo">
            <img
              src=""
              alt="logo"
            />
          </div>
          <div onClick={() => openHandle()} className="menu-icon">
            <HiMenu />
          </div>
          
        </div>
        <hr />
        <div className="bottom-nav">
          <div>
            <span>
              <HiOutlineShoppingCart className="icon" />
            </span>
            <Link to="/signup">
              ورود
              <HiLogin className="icon" />
            </Link>
          </div>
          <div onClick={() => setOpenSearchBar(true)} className="search-box">
            <span>جستجو</span>
            <HiSearch className="HiSearch" />
          </div>
          <div className={`search-bar-box ${openSearchBar && "open"}`}>
            <div>
              <input type="text" className="search-input" placeholder="بگ" />
              <span>
                <HiArrowNarrowRight
                  onClick={() => setOpenSearchBar(false)}
                  className="icon"
                />
              </span>
            </div>
            <section>
              <div>
              <span></span>
                <span>
                  <FaFire className="icon" />
                </span>
              </div>
              <div className="popular-searches">
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span></span>
                </div>
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span></span>
                </div>
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span></span>
                </div>
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span></span>
                </div>
                <div className="items">
                  <span>
                    <HiChevronLeft className="icon" />
                  </span>
                  <span></span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <hr />
        <div className="select-region" onClick={() => setOpenRegionBox(true)}>
          <span>
            <HiChevronLeft className="icon" />
          </span>
          <span>
            لطفا شهر خود را انتخاب کنید
            <HiMapPin className="icon-map" />
          </span>
        </div>
        <section
          className={`backdrop-select-region-box ${openRegionBox && "open"} `}
        >
          <header>
            <button
              className="close-btn"
              onClick={() => setOpenRegionBox(false)}
            >
              <HiOutlineXMark />
            </button>
            <span>انتخاب شهر</span>
          </header>
          <main className="select-region-box">
            <div>
              <span>مکان یابی خودکار</span>
              <FiMove className="icon" />
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>آذربایجان شرقی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>آذربایجان غربی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>اردبیل</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>اصفهان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>البرز</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>ایلام</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>بوشهر</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>تهران</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>چهارمحال و بختیاری</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>خراسان جنوبی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>خراسان رضوی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>خراسان شمالی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>خوزستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>زنجان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>سمنان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>سیستان و بلوچستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>فارس</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>قزوین</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>قم</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>کردستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>کرمان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>کرمانشاه</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>کهگیلویه و بویراحمد</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>گلستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>گیلان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>لرستان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>مازندران</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>مرکزی</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>هرمزگان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>همدان</span>
            </div>
            <div className="city">
              <span>
                <HiChevronLeft className="icon" />
              </span>
              <span>یزد</span>
            </div>
          </main>
        </section>
      </nav>
      {/* PC Nav */}
      <div className="banner-PC">
        <img
          src=""
          alt="محل قرار گیری بنر "
        />
      </div>
      <nav className="PC">
        <div className="nav-PC">
          <section>
            <HiOutlineShoppingCart className="icon" />
            <hr />
            <Link to="signup" className="register-btn">
              <span>ورود | ثبت نام</span>
              <HiLogin className="icon" />
            </Link>
          </section>
          <section>
            <div onClick={() => setOpenSearchBar(true)} className="search-box">
              <span>بگرد</span>
              <HiSearch className="HiSearch" />
              <div className={`search-bar-box-PC ${openSearchBar && "open"}`}>
                <div className="search-bar-PC">
                  <input type="text" placeholder="جستجو" />
                  <HiSearch className="HiSearch" />
                </div>
                <div className="img-container">
                  <img
                    src=""
                    alt="product"
                  />
                </div>
                <footer>
                  <div>
                    <span>جستجوهای پرطرفدار</span>
                    <span>
                      <FaFire className="icon" />
                    </span>
                  </div>
                  <Swiper
                    className="slider"
                    spaceBetween={0}
                    slidesPerView={8}
                    navigation
                  >
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span> </span>
                    </SwiperSlide>
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span> </span>
                    </SwiperSlide>
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span> </span>
                    </SwiperSlide>
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span> </span>
                    </SwiperSlide>
                    <SwiperSlide className="slide-items">
                      <span>
                        <HiChevronLeft />
                      </span>
                      <span> </span>
                    </SwiperSlide>
                  </Swiper>
                </footer>
              </div>
            </div>
            <div
              onClick={() => setOpenSearchBar(false)}
              className={` backdrop-PC ${openSearchBar && "open"}`}
            ></div>
            <div className="logo">
              <img
                src=""
                alt="logo"
              />
            </div>
          </section>
        </div>
        <div>
          <nav>
            <button onClick={() => setOpenRegionBox(true)}>
              <span>شهر خود را انتخاب کنید</span>
              <span>
                <HiMapPin className="icon-map" />
              </span>
            </button>
            <div className="navbar">
              <a
                data="link-1"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                در فروشگاه ما بفروشید!
              </a>
              <a
                data="link-2"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                سوالی دارید؟
              </a>
              <hr />
              <a
                data="link-3"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                شگفت‌انگیزها
              </a>
              <a
                data="link-4"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                تخفیف‌ها و پیشنهادها
              </a>
              <a
                data="link-5"
                href="#"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                پرفروش‌ترین‌ها
              </a>
            
              <hr />
              <div
                data="link-7"
                onMouseEnter={(e) => hoverhandler(e)}
                onMouseOver={(e) => setShow(true)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                <span>دسته‌بندی کالاهای من</span>
               
              </div>
              <div id="navigation" ref={navigation}></div>
            </div>
            <div
              className={`backdrop-select-box-region-PC ${
                openRegionBox && "open"
              } `}
              onClick={() => setOpenRegionBox(false)}
            >
              <main
                className="select-box-region-PC"
                onClick={(e) => e.stopPropagation()}
              >
                <header>
                  <button
                    className="close-btn"
                    onClick={() => setOpenRegionBox(false)}
                  >
                    <HiOutlineXMark />
                  </button>
                  <span>انتخاب شهر</span>
                </header>
                <section>
                  <div id="auto-region-found">
                    <span>مکان یابی خودکار</span>
                    <FiMove className="icon" />
                  </div>
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>آذربایجان شرقی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>آذربایجان غربی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>اردبیل</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>اصفهان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>البرز</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>ایلام</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>بوشهر</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>تهران</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>چهارمحال و بختیاری</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>خراسان جنوبی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>خراسان رضوی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>خراسان شمالی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>خوزستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>زنجان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>سمنان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>سیستان و بلوچستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>فارس</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>قزوین</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>قم</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>کردستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>کرمان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>کرمانشاه</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>کهگیلویه و بویراحمد</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>گلستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>گیلان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>لرستان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>مازندران</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>مرکزی</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>هرمزگان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>همدان</span>
                  </div>
                  <hr className="city-line" />
                  <div className="city">
                    <span>
                      <HiChevronLeft className="icon" />
                    </span>
                    <span>یزد</span>
                  </div>
                </section>
              </main>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}
