import styled, { css } from "styled-components";

export const Nav = styled.nav`
  width: 95%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  && .nav-left {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  && .nav-right {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  && .menu-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
    margin-right: 8px;
    border-radius: 8px;
    background-color: #f7d074;
  }

  && .menu-icon > span {
    font-size: 2rem;
    margin-right: 4px;
  }

  && .menu-icon > p {
    width: 24px;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    background-color: #fff;
  }

  && .menu-icon:hover {
    cursor: pointer;
  }

  && .nav-logo {
    font-size: 2.2rem;
    line-height: 2.2rem;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    height: 65px;

    flex-direction: row;
    justify-content: space-between;

    && .nav-left {
      width: 160px;
      height: 100%;
      padding: 0;
    }

    && .nav-right {
      width: 60%;
      max-width: 500px;
      height: 100%;
      align-items: center;
    }
  }
`;

export const Search = styled.div<any>`
  width: 100%;
  height: 45px;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  border: ${(props) => (props.focusActive ? css`1px solid #000` : css`none`)};
  background-color: #f5f5f5;

  && .search-icon-container {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px 0 0 16px;
  }

  && .search-icon {
    display: inline-block;
    width: 15px;
    height: 15px;
  }

  && .search-input {
    width: calc(100% - 40px);
    border: none;
    border-radius: 0 16px 16px 0;
    background-color: rgba(0, 0, 0, 0);
  }

  && .search-input:focus {
    outline: none;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
`;
