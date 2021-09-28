import React, { useState } from "react";
import { Nav, Search } from "./styles";

export const Navbar = () => {
  const [searchFocus, setSearchFocus] = useState<Boolean>(false);

  const onFocusSearch = () => {
    setSearchFocus(true);
  };

  const onBlurSearch = () => {
    setSearchFocus(false);
  };

  return (
    <Nav>
      <div className="nav-left">
        <img className="menu-icon" src="icons/menu_icon.svg" alt="menu icon" />
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
