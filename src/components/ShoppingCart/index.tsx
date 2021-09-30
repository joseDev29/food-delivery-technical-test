import {
  selectShoppingCartActive,
  selectShoppingCartList,
  toggleShoppingCart,
} from "../../context/generalSlice";
import { useStateDispatch, useStateSelector } from "../../context/hooks";
import { AuthSection } from "../AuthSection";
import { OrderCheckout } from "../OrderCheckout";
import { OrderData } from "../OrderData";
import { ShoppingCartList } from "../ShoppingCartList";
import { ShoppingCartCloseBtn, ShoppingCartEmpty } from "./styles";
import { ShoppingCartMain } from "./styles";

export const ShoppingCart = () => {
  const toggle = useStateSelector(selectShoppingCartActive);
  const cartItems = useStateSelector(selectShoppingCartList);
  const dispatch = useStateDispatch();

  return (
    <ShoppingCartMain toggle={toggle}>
      <ShoppingCartCloseBtn>
        <span
          className="material-icons-round sc-close"
          onClick={() => {
            dispatch(toggleShoppingCart());
          }}
        >
          close
        </span>
      </ShoppingCartCloseBtn>
      <AuthSection />
      <h3 className="shopping-cart-title">
        My Order <span className="emoji-icon"></span>
      </h3>
      {cartItems.length ? (
        <>
          <OrderData />
          <ShoppingCartList />
          <OrderCheckout />
        </>
      ) : (
        <ShoppingCartEmpty>Shopping cart empty!</ShoppingCartEmpty>
      )}
    </ShoppingCartMain>
  );
};
