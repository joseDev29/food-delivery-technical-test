import { selectShoppingCartActive } from "../../context/generalSlice";
import { useStateSelector } from "../../context/hooks";
import { AuthSection } from "../AuthSection";
import { ShoppingCartMain } from "./styles";

export const ShoppingCart = () => {
  const toggle = useStateSelector(selectShoppingCartActive);

  return (
    <ShoppingCartMain toggle={toggle}>
      <AuthSection />
    </ShoppingCartMain>
  );
};
