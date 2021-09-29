import { selectProducts } from "../../context/generalSlice";
import { useStateSelector } from "../../context/hooks";

import { ProductItem, ProductsContainer } from "./styles";

export const ProductList = () => {
  const products = useStateSelector(selectProducts);

  return (
    <ProductsContainer>
      {products.map(({ id, name, image, price, qualification, time }) => (
        <ProductItem key={id}>
          <div className="product-item-head">
            <img src={image} alt={`${name} product image`} />
            <div>{time}</div>
          </div>
          <div className="product-item-body">
            <h4>{name}</h4>
            <h5>
              <span>
                <span className="product-item-star-icon"></span> {qualification}
              </span>
              <span className="product-item-price">${price}</span>
            </h5>
          </div>
        </ProductItem>
      ))}
    </ProductsContainer>
  );
};
