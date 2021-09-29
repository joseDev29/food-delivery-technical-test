import React, { useState } from "react";
import { toggleShoppingCart } from "../../context/generalSlice";
import { useStateDispatch } from "../../context/hooks";
import { Nav, Search } from "./styles";

export const Navbar = () => {
  const [searchFocus, setSearchFocus] = useState<Boolean>(false);

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
        <img
          className="menu-icon"
          src="icons/menu_icon.svg"
          alt="menu icon"
          onClick={() => {
            dispatch(toggleShoppingCart());
          }}
        />
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
