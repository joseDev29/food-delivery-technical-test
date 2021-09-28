import { useState } from "react";
import { ProductItem, ProductsContainer } from "./styles";

interface Products {
  id: number;
  name: string;
  qualification: number;
  time: string;
  price: number;
  image: string;
}

const initialState: Products[] = [
  {
    id: 1,
    name: "Filete de ternera con salsa",
    qualification: 4.9,
    time: "25-30min",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
  },
  {
    id: 2,
    name: "Desayuno de primer plano lácteos",
    qualification: 4.7,
    time: "20-25min",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
  },
  {
    id: 3,
    name: "Burrito de pollo",
    qualification: 4.6,
    time: "25-30min",
    price: 13.99,
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
  },
  {
    id: 4,
    name: "Plato de salmón",
    qualification: 4.5,
    time: "25-30min",
    price: 15.99,
    image:
      "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
  },
  {
    id: 5,
    name: "Postre",
    qualification: 4.8,
    time: "15-20min",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
  },
  {
    id: 6,
    name: "Sándwich servido en la tabla de cortar",
    qualification: 4.7,
    time: "10-15min",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/5112594/pexels-photo-5112594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 7,
    name: "Plato de aguacate cocido",
    qualification: 4.4,
    time: "15-25min",
    price: 12.99,
    image:
      "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
  },
  {
    id: 8,
    name: "Hamburguesa",
    qualification: 4.6,
    time: "10-15min",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
  },
];

export const ProductList = () => {
  const [products, setProducts] = useState<Products[]>(initialState);

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
