import "./ItemDetail.css";
import { type Product } from "./ProductPage";

type ProductProps = {
  product: Product;
};
const ItemDetail: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      <section className="item-details">
        <div className="main-thumbnail">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="other-thumbnails">
          {product.thumbnails.map((thumb, index) => (
            <img src={thumb} alt={`Thumbnail ${index + 1}`} key={index} />
          ))}
        </div>
        <div className="info">
          <h1>Item Details Component</h1>
        </div>

        <div className="item-info">
          <h2 className="company-name">Sneaker Company</h2>

          <h1 className="product-name">Fall Limited Edition Sneakers</h1>

          <p className="product-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="product-pricing">
            <div className="discounted-price">
              <span className="product-price">$125.00</span>
              <span className="discount-percentage">50%</span>
            </div>
            <span className="price">$250.00</span>
          </div>

          <div className="add-to-cart-section">
            <div className="quantity">
              <button className="qty-btn minus-btn">-</button>
              <input type="number" className="qty-input" value="0" min="0" />
              <button className="qty-btn plus-btn">+</button>
            </div>

            <button className="add-to-cart-btn">
              <img src="../../images/icon-cart.svg" alt="Cart Icon" />
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
