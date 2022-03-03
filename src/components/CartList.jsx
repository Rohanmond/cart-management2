import Cart from "./Cart";
import { useCartData } from "./CreateContext";

const CartList = () => {
  const { cartData } = useCartData();
  return (
    <main className="cart_mngmt-main">
      <div className="cart_mngmt-main-heading text-align-center">
        <h4>MY CART(2)</h4>
      </div>
      <div className="cart_mngmt-content">
        <div className="cart_mngmt-carts">
          {cartData.map((el) => {
            return <Cart el={el} key={el.id} />;
          })}
        </div>
      </div>
    </main>
  );
};
export default CartList;
