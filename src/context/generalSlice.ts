import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Product, ShoppingCartItem, User } from "../interfaces";
import { RootState } from "./store";

export interface GeneralState {
  categories: Category[];
  products: Product[];
  user: User | null;
  shoppingCartList: ShoppingCartItem[];
  shoppingCartActive: boolean;
  orderValue: number;
}

const initialState = {
  categories: [
    {
      id: 1,
      name: "All",
      icon: "https://image.flaticon.com/icons/svg/701/701965.svg",
    },
    {
      id: 2,
      name: "Pizza",
      icon: "https://image.flaticon.com/icons/svg/599/599995.svg",
    },
    {
      id: 3,
      name: "Asian",
      icon: "https://image.flaticon.com/icons/svg/1895/1895684.svg",
    },
    {
      id: 4,
      name: "Burgers",
      icon: "https://image.flaticon.com/icons/svg/883/883806.svg",
    },
    {
      id: 5,
      name: "Barbecue",
      icon: "https://image.flaticon.com/icons/svg/933/933310.svg",
    },
    {
      id: 6,
      name: "Dessers",
      icon: "https://image.flaticon.com/icons/svg/174/174394.svg",
    },
    {
      id: 7,
      name: "Thai",
      icon: "https://image.flaticon.com/icons/svg/135/135367.svg",
    },
    {
      id: 8,
      name: "Sushi",
      icon: "https://image.flaticon.com/icons/svg/1900/1900683.svg",
    },
  ],
  products: [
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
  ],
  user: null,
  shoppingCartList: [],
  shoppingCartActive: false,
  orderValue: 0,
} as GeneralState;

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    changeAuth: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    toggleShoppingCart: (state) => {
      state.shoppingCartActive
        ? (state.shoppingCartActive = false)
        : (state.shoppingCartActive = true);
    },
    addToShoppingCart: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        price: number;
        image: string;
      }>
    ) => {
      let exists = false;

      for (let item of state.shoppingCartList) {
        if (item.id === action.payload.id) {
          item.count += 1;
          item.total = item.price * item.count;
          exists = true;
          break;
        }
      }

      if (!exists) {
        state.shoppingCartList.push({
          ...action.payload,
          count: 1,
          total: action.payload.price,
        });
      }

      let orderValue = 0;
      state.shoppingCartList.forEach(
        (item) => (orderValue += item.count * item.price)
      );
      state.orderValue = orderValue;
    },

    removeToShoppingCart: (state, action: PayloadAction<number>) => {
      for (let i = 0; i < state.shoppingCartList.length; i++) {
        if (state.shoppingCartList[i].id === action.payload) {
          state.shoppingCartList[i].count -= 1;
          state.shoppingCartList[i].total -= state.shoppingCartList[i].price;

          if (state.shoppingCartList[i].count <= 0) {
            state.shoppingCartList = [
              ...state.shoppingCartList.slice(0, i),
              ...state.shoppingCartList.slice(
                i + 1,
                state.shoppingCartList.length
              ),
            ];
          }

          let orderValue = 0;
          state.shoppingCartList.forEach(
            (item) => (orderValue += item.count * item.price)
          );
          state.orderValue = orderValue;

          break;
        }
      }
    },
  },
});

export const {
  changeAuth,
  toggleShoppingCart,
  addToShoppingCart,
  removeToShoppingCart,
} = generalSlice.actions;

export const selectCategories = (state: RootState) => state.general.categories;
export const selectProducts = (state: RootState) => state.general.products;
export const selectUser = (state: RootState) => state.general.user;
export const selectShoppingCartActive = (state: RootState) =>
  state.general.shoppingCartActive;
export const selectShoppingCartList = (state: RootState) =>
  state.general.shoppingCartList;
export const selectOrderValue = (state: RootState) => state.general.orderValue;

export default generalSlice.reducer;
