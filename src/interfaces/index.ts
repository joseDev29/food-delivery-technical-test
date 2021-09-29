export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Products {
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
