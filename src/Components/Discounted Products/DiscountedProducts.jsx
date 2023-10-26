import { HiChevronLeft } from "react-icons/hi";
import { useEffect } from "react";
import ChangerNumToPersian from "../../Utils/ChangerNumToPersian";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscountedProducts } from "../../Features/DiscountedProducts/DiscountedProductsSlice";
import "./DiscountedProducts.css";

// Functional component 'DiscountedProducts'
const DiscountedProducts = () => {
  // Get access to the Redux dispatch function
  const dispatch = useDispatch();

  // Destructure 'products' from the 'discountedProducts' slice of the Redux store
  const { products } = useSelector((state) => state.discountedProducts);

  // Fetch discounted products on component mount
  useEffect(() => {
    dispatch(fetchDiscountedProducts());
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <section className="discounted-products-container margin">
      <header className="discounted-products-header">
        <h3>منتخب محصولات تخفیف و حراج</h3>
      </header>
      <main className="discounted-products-main">
        {products.map((product) => {
          return (
            <a key={product.id} href="#" className="discounted-products-items">
              <div
                className={`product-img-container ${product.plus && "plus"} `}
              >
                <img src={product.image} alt="" />
              </div>
              <div className="price-container">
                <div className="discount-box">
                  <span className="amount-discount">
                    {ChangerNumToPersian(product.discount)}%
                  </span>
                  <span>
                    {ChangerNumToPersian(
                      product.price - (produبیلیبلیct.price * product.discount) / 100
                    )}
                  </span>
                </div>
                <div className="price-box">
                  <span>{ChangerNumToPersian(product.price)}</span>
                </div>
              </div>
            </a>
          );
        })}
      </main>
      <footer className="discounted-products-footer">
        <a href="#">
          مشاهده بیشتر
          <HiChevronLeft />
        </a>
      </footer>
    </section>
  );
};
export default DiscountedProducts;