const Cart = ({ el }) => {
  const { image, name, price, quantity } = el;
  return (
    <div className="card-container card-container-hz brd-rd-semi-sq">
      <div className="card-img-container-hz">
        <img className="card-img brd-rd-semi-sq" src={image} alt="card" />
      </div>
      <div className="card-content">
        <div className="cart_mngmt-card-container">
          <div className="cart_mngmt-card-item">
            <h4>{name}</h4>
          </div>
          <div className="cart_mngmt-card-item">
            <p className="font-wt-semibold">₹{price}</p>
            <p className="text-secondary-color">
              <del>₹3999</del>
            </p>
          </div>
          <div className="cart_mngmt-card-item">
            <div className="text-secondary-color font-wt-bold">50% off</div>
          </div>
          <div className="cart_mngmt-card-item">
            <p>Quantity:</p>
            <p className="text-secondary-color">
              <i className="fas fa-minus-circle"></i>
            </p>
            <p className="cart-quantity-number">{quantity}</p>
            <p className="text-secondary-color">
              <i className="fas fa-plus-circle"></i>
            </p>
          </div>
        </div>
        <div className="card-footer-elements cart_mngmt-card-footer">
          <button className="btn btn-secondary outlined-primary brd-rd-semi-sq">
            Add to wishlist
          </button>
          <button className="btn btn-secondary outlined-secondary hover-danger brd-rd-semi-sq">
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
