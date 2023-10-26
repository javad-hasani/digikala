import React from "react";
import "./Footer.css";
import { HiChevronLeft, HiChevronUp } from "react-icons/hi";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";


// Function to scroll up to the top of the page
export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer className="main-footer">
      <div className="footer-container">
        <section className="section-go-up-and-logo">
          <button onClick={() => scrollUp()}>
            بازگشت به بالا
            <HiChevronUp className="icon" />
          </button>
          <div className="logo">
            <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
        </section>
        <section className="details-support">
          <p> </p>
          <div className="line">|</div>
          <p> </p>
        </section>
        <section className="digikala-option">
          
          <a href="#">
            <div className="img-container">
              <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt="محل قرار گیری  آیکن"
              />
            </div>
            <p></p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt="محل قرار گیری  آیکن"
              />
            </div>
            <p>   </p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                 src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                alt="محل قرار گیری  آیکن"
              />
            </div>
            <p>  </p>
          </a>
        </section>
        <section className="register-and-questions">
          
     
          <div className="question-box">
            <h4>خدمات مشتریان</h4>
            <a href="#">پاسخ به پرسش های متداول</a>
            <a href="#">رویه های بازگرداندن کالا</a>
            <a href="#">شرایط استفاده</a>
            <a href="#">حریم خصوصی</a>
            <a href="#">گزارش باگ</a>
          </div>
          <div className="question-box hidden">
            <h4>راهنمای خرید از فروشگاه</h4>
            <a href="#">نحوه ثبت سفارش</a>
            <a href="#">رویه ارسال سفارش</a>
            <a href="#">شیوه های پرداخت</a>
          </div>
          <div className="register-box">
            <div>
              <h3>همراه ما باشید !</h3>
              <div className="social-networks-container">
                <span>
                  <IoLogoInstagram />
                </span>
                <span>
                  <IoLogoLinkedin />
                </span>
                <span>
                  <IoLogoTwitter />
                </span>
                <span>
                  <IoLogoWhatsapp />
                </span>
              </div>
            </div>
            <div>
              <h3 className="hidden">
                با ثبت نام ایمیل ، از جدیدترین تخفیف ها با خبر شوید
              </h3>
              <form action="#">
                <input type="email" placeholder="ایمیل شما" />
                <button>ثبت</button>
              </form>
            </div>
          </div>
        </section>
       
        <section className="about-digikala">
          <div>
            <a href="#">
              <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                   src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="description">
            <h5>فروشگاه اینترنتی ، بررسی، انتخاب و خرید آنلاین</h5>
            <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab incidunt amet.
            </p>
            <a href="#">
              مشاهده بیشتر
              <HiChevronLeft className="icon" />
            </a>
          </div>
        </section>
        <div className="digikala-rights">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat unde facere, deleniti aperiam corrupti temporibus, debitis, aspernatur sint beatae tempore magni illo qui. Consequuntur fuga quisquam suscipit nisi molestias!
          </p>
        </div>
      </div>
      
    </footer>
  );
}
