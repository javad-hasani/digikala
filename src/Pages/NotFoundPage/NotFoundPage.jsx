import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout/Layout";
import Lottie from "lottie-react";
import NotFound from './../../../assets/pic/404/NotFound.json'
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="not-found-page-main">
        <h4>صفحه‌ای که دنبال آن بودید پیدا نشد!</h4>
        <Link to="/" className="home-page-link">
          <span>صفحه اصلی</span>
          <HiChevronLeft />
        </Link>
        <div className="img-container">
          <Lottie className="lottie-notfound"
      animationData={NotFound} 
        width={100}
        height={100}
/>
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
