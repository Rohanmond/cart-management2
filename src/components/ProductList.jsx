import { useProductData } from "./CreateContext";
import Product from "./Product";

const ProductList = ({ addToCartHandler }) => {
  const { data } = useProductData();

  return (
    <main className="productlist-main">
      <div className="productlist-main-container">
        <div className="productlist-main-header">
          <p className="font-wt-bold">Showing All Products</p>
          <p>(Showing 20 products)</p>
        </div>
        <div className="productlist-main-card-container">
          {data.map((el) => {
            return (
              <Product
                el={el}
                key={el.id}
                addToCartHandler={addToCartHandler}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default ProductList;
