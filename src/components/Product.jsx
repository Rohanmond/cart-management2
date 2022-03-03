import { useCartData } from "./CreateContext";

const Product = ({ el, addToCartHandler }) => {
  const { name, image, price } = el;
  const { cartData } = useCartData();

  return (
    <div className="card-container card-container-shadow productlist-card brd-rd-semi-sq">
      <div className="card-img-container">
        <img
          className="card-img productlist-card-img"
          src={image}
          alt="card "
        />
        <button className="card-img-tag-btn productlist-card-img-tag-btn">
          <span className="material-icons">favorite_border</span>
        </button>
      </div>
      <div className="card-content">
        <div className="card-text">
          <div>{name}</div>
          <div className="card-subtitle">{price}</div>
        </div>
        <div className="card-footer-elements">
          <button
            onClick={() => addToCartHandler(el)}
            className="btn btn-primary background-primary brd-rd-semi-sq"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
