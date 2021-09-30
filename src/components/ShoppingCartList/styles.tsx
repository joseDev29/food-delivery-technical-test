import styled from "styled-components";

export const ShoppingCartListContainer = styled.div`
  width: 90%;
  max-width: 400px;
  height: 30%;
  margin: 0 0 0 12px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: thin;
`;

export const ShoppingCartListItem = styled.div`
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  &.scli-no-margin-top {
    margin-top: 0;
  }

  && .scli-image {
    width: 25%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  && .scli-count {
    display: inline-block;
    width: 10%;
    text-align: center;
  }

  && .scli-name {
    width: 30%;
    font-size: 1rem;
    font-weight: 700;
    text-align: start;
  }

  && .scli-price {
    width: 12%;
    text-align: center;
  }

  && .scli-buttons {
    width: 18%;
    max-width: 45px;
    display: flex;
    justify-content: space-between;
  }

  && .scli-buttons > span {
    display: flex;
    width: 20px;
    height: 20px;
    font-size: 1.5rem;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    user-select: none;
  }

  && .scli-buttons > span:hover {
    cursor: pointer;
  }

  && .scli-add {
    background-color: #f0cb5b;
  }

  && .scli-remove {
    background-color: #f05b5b;
  }
`;
