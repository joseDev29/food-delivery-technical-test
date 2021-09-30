import {
  addToShoppingCart,
  removeToShoppingCart,
  selectShoppingCartList,
} from "../../context/generalSlice";
import { useStateDispatch, useStateSelector } from "../../context/hooks";
import { ShoppingCartListContainer, ShoppingCartListItem } from "./styles";

export const ShoppingCartList = () => {
  const items = useStateSelector(selectShoppingCartList);
  const dispatch = useStateDispatch();

  return (
    <ShoppingCartListContainer className="my-scroll">
      {items.map(({ id, name, image, price, count, total }, index) => (
        <ShoppingCartListItem
          key={id}
          className={`${!index && "scli-no-margin-top"}`}
        >
          <img className="scli-image" src={image} alt="cart item image" />
          <p className="scli-count">{count} x</p>
          <h4 className="scli-name">{name}</h4>
          <p className="scli-price">${total.toFixed(2)}</p>
          <div className="scli-buttons">
            <span
              className="scli-add material-icons-round"
              onClick={() => {
                dispatch(
                  addToShoppingCart({
                    id,
                    image,
                    name,
                    price,
                  })
                );
              }}
            >
              add
            </span>
            <span
              className="scli-remove material-icons-round"
              onClick={() => {
                dispatch(removeToShoppingCart(id));
              }}
            >
              remove
            </span>
          </div>
        </ShoppingCartListItem>
      ))}
    </ShoppingCartListContainer>
  );
};
