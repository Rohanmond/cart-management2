import { createContext, useContext, useState } from "react";

const NavRouteContext = createContext({ route: "product" });
const ProductDataContext = createContext({ data: [] });
const CartDataContext = createContext({ cartData: [] });

export const NavRouteProvider = ({ children }) => {
  const [route, setRoute] = useState("product");
  return (
    <NavRouteContext.Provider value={{ route, setRoute }}>
      {children}
    </NavRouteContext.Provider>
  );
};
export const ProductDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <ProductDataContext.Provider value={{ data, setData }}>
      {children}
    </ProductDataContext.Provider>
  );
};
export const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  return (
    <CartDataContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartDataContext.Provider>
  );
};

export const useNavRoute = () => useContext(NavRouteContext);
export const useProductData = () => useContext(ProductDataContext);
export const useCartData = () => useContext(CartDataContext);
