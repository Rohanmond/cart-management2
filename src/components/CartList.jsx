import Cart from "./Cart";
import { useCartData } from "./CreateContext";

const CartList = ({
  removeCartHandler,
  quantityIncreaseHandler,
  quantityDecreaseHandler
}) => {
  const { cartData } = useCartData();
  return (
    <main className="cart_mngmt-main">
      <div className="cart_mngmt-main-heading text-align-center">
        <h4>MY CART({cartData.length})</h4>
      </div>
      <div className="cart_mngmt-content">
        <div className="cart_mngmt-carts">
          {cartData.map((el) => {
            return (
              <Cart
                el={el}
                key={el.id}
                removeCartHandler={removeCartHandler}
                quantityIncreaseHandler={quantityIncreaseHandler}
                quantityDecreaseHandler={quantityDecreaseHandler}
              />
            );
          })}
        </div>
        {cartData.length === 0 && <h2>Your cart is empty</h2>}
        {cartData.length !== 0 && (
          <div class="cart_mngmt-price-details">
            <div class="card-container cart_mngmt-price-card brd-rd-semi-sq">
              <div class="mngmt_cart-price-header">
                <h3>CART PRICE DETAILS</h3>
                <button class="btn btn-secondary outlined-secondary brd-rd-semi-sq">
                  <i class="fas fa-share"></i>
                </button>
              </div>
              {cartData.map((el) => {
                return (
                  <div className="mngmt_cart-price-item">
                    <p>{el.name}</p>
                    <p>Q:{el.quantity}</p>
                    <p>₹{el.price * el.quantity}</p>
                  </div>
                );
              })}

              <div class="mngmt_cart-price-item">
                <p class="font-wt-bold">Total price:</p>
                <p class="font-wt-bold">
                  {cartData.reduce((acc, curr) => {
                    return acc + curr.price * curr.quantity;
                  }, 0)}
                </p>
              </div>
              <a
                class="btn btn-link-primary background-primary brd-rd-semi-sq text-align-center"
                href="../checkout/checkout.html"
              >
                CHECKOUT
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
export default CartList;
