import axios from "axios";
import { useEffect } from "react";
import CartList from "./components/CartList";
import {
  useCartData,
  useNavRoute,
  useProductData
} from "./components/CreateContext";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import "./styles.css";
const productAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/products";
const cartAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/carts";
export default function App() {
  const { route } = useNavRoute();
  const { setData } = useProductData();
  const { cartData, setCartData } = useCartData();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(productAPI);
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(cartAPI);
        if (res.status === 200 || res.status === 201) {
          setCartData(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const addToCartHandler = async (el) => {
    try {
      const cartEle = cartData.find((it) => it.product_id === el.id);
      if (cartEle) {
        const res = await axios.put(`${cartAPI}/${cartEle.id}`, {
          ...cartEle,
          quantity: cartEle.quantity + 1
        });
        if (res.status === 201 || res.status === 200)
          setCartData(
            cartData.map((it) => {
              if (it.id === cartEle.id) return res.data;
              return it;
            })
          );
      } else {
        const res = await axios.post(cartAPI, {
          ...el,
          quantity: 1,
          product_id: el.id
        });
        if (res.status === 201 || res.status === 200) {
          setCartData(cartData.concat(res.data));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeCartHandler = async (id) => {
    try {
      const res = await axios.delete(`${cartAPI}/${id}`);
      if (res.status === 200 || res.status === 201) {
        setCartData(cartData.filter((it) => it.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const quantityIncreaseHandler = async (cartEle) => {
    try {
      const res = await axios.put(`${cartAPI}/${cartEle.id}`, {
        ...cartEle,
        quantity: cartEle.quantity + 1
      });
      if (res.status === 201 || res.status === 200)
        setCartData(
          cartData.map((it) => {
            if (it.id === cartEle.id) return res.data;
            return it;
          })
        );
    } catch (err) {
      console.error(err);
    }
  };
  const quantityDecreaseHandler = async (cartEle) => {
    if (cartEle.quantity === 1) {
      removeCartHandler(cartEle.id);
      return;
    }
    try {
      const res = await axios.put(`${cartAPI}/${cartEle.id}`, {
        ...cartEle,
        quantity: cartEle.quantity - 1
      });
      if (res.status === 201 || res.status === 200)
        setCartData(
          cartData.map((it) => {
            if (it.id === cartEle.id) return res.data;
            return it;
          })
        );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <Nav />
      {route === "product" && (
        <ProductList addToCartHandler={addToCartHandler} />
      )}
      {route === "cart" && (
        <CartList
          removeCartHandler={removeCartHandler}
          quantityIncreaseHandler={quantityIncreaseHandler}
          quantityDecreaseHandler={quantityDecreaseHandler}
        />
      )}
    </div>
  );
}
