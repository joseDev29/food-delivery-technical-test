import React, { useState } from "react";
import {
  selectShoppingCartList,
  toggleShoppingCart,
} from "../../context/generalSlice";
import { useStateDispatch, useStateSelector } from "../../context/hooks";
import { Nav, Search } from "./styles";

export const Navbar = () => {
  const [searchFocus, setSearchFocus] = useState<Boolean>(false);

  const cartItems = useStateSelector(selectShoppingCartList);
  const dispatch = useStateDispatch();

  const onFocusSearch = () => {
    setSearchFocus(true);
  };

  const onBlurSearch = () => {
    setSearchFocus(false);
  };

  return (
    <Nav>
      <div className="nav-left">
        <div
          className="menu-icon"
          onClick={() => {
            dispatch(toggleShoppingCart());
          }}
        >
          <span className="material-icons-round">shopping_cart</span>
          <p>{cartItems.length}</p>
        </div>
        <span className="nav-logo">Chukwudi</span>
      </div>
      <div className="nav-right">
        <Search focusActive={searchFocus}>
          <div className="search-icon-container">
            <img
              className="search-icon"
              src="/icons/search_icon.svg"
              alt="search icon"
            />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onFocus={onFocusSearch}
            onBlur={onBlurSearch}
          />
        </Search>
      </div>
    </Nav>
  );
};
