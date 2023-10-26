import React, { useState } from "react";
import { HiArrowLeft, HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import "./MoreServices.css";

const MoreServices = () => {
  // State hook to manage the 'open' state
  const [open, setOpen] = useState(false);

  // Conditional block to handle body overflow based on 'open' state
  if (open) {
    // If 'open' is true, set body overflow to 'hidden'
    document.body.style.overflow = "hidden";
  } else {
    // If 'open' is false, reset body overflow to default
    document.body.style.overflow = "";
  }

  return (
    <section className="more-services-container max-width-2">
      <a onClick={() => setOpen(true)}>
        <div>
          <div className="more-icon">
            <HiOutlineDotsHorizontal />
          </div>
          <span>پیش فرض</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
            <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
          <span>پیش فرض</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
            <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
          <span>پیش فرض</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
          <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
          <span>پیش فرض</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
          <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
          <span>پیش فرض</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
          <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
          <span>پیش فرض</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
          <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
          <span>پیش فرض</span>
        </div>
      </a>
      <a href="#">
        <div>
          <div className="img-container">
          <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
          </div>
          <span>پیش فرض</span>
        </div>
      </a>
      <div
        className={`backdrop-more-services-section ${open && "open"}`}
        onClick={() => setOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="more-services-section-box"
        >
          <header className="more-section-services-header">
            <button className="close-btn" onClick={() => setOpen(false)}>
              <HiOutlineXMark />
            </button>
            <h3>خدمات فروشگاه </h3>
          </header>
          <main className="more-section-services-main">
            <div className="more-section-services-main-header">
              <a href="#">
                <div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                  <span>پیش فرض</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                  <span>پیش فرض</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                  <span>پیش فرض</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                  <span>پیش فرض</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                  <span>پیش فرض</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                  <span>پیش فرض</span>
                </div>
              </a>
            </div>
            <div className="more-section-services-group">
            <h3>پیش فرض</h3>
              <div className="services-items-container">
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                  <h3>پیش فرض</h3>
                  <p>پیش فرض</p>
                  </div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                  <h3>پیش فرض</h3>
                  <p>پیش فرض</p>
                  </div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                  <h3>پیش فرض</h3>
                  <p>پیش فرض</p>
                  </div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                  <h3>پیش فرض</h3>
                  <p>پیش فرض</p>
                  </div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                  <h3>پیش فرض</h3>
                  <p>پیش فرض</p>
                  </div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                  <h3>پیش فرض</h3>
                  <p>پیش فرض</p>
                  </div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                  <h3>پیش فرض</h3>
                  <p>پیش فرض</p>
                  </div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                </div>
                <div className="services-items">
                  <div className="icons">
                    <HiArrowLeft />
                  </div>
                  <div className="services-items-description">
                  <h3>پیش فرض</h3>
                  <p>پیش فرض</p>
                  </div>
                  <div className="img-container">
                  <img
               src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
              alt=""
            />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MoreServices;
