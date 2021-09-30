export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Product {
  id: number;
  name: string;
  qualification: number;
  time: string;
  price: number;
  image: string;
}

export interface User {
  name: string | null;
  image: string | null;
}

export interface ShoppingCartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  total: number;
  count: number;
}
