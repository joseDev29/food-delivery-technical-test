import styled, { css } from "styled-components";

export const ShoppingCartMain = styled.div<any>`
  position: fixed;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  right: ${(props) => (props.toggle ? css`0` : css`-100%`)};
  background-color: #edede6;
  transition-property: right;
  transition-duration: 500ms;
  transition-timing-function: ease-in;
  transition-delay: 0;

  && .shopping-cart-title {
    width: 90%;
    max-width: 360px;
    display: flex;
    align-items: center;
    font-size: 2rem;
  }

  && .emoji-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-left: 4px;
    background-image: url("icons/emoji_icon.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (min-width: 1300px) {
    right: 0;
    width: 480px;
  }
`;

export const ShoppingCartCloseBtn = styled.div`
  width: 100%;
  margin: 0 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: start;

  && .sc-close {
    font-size: 2.5rem;
    font-weight: 700;
  }

  && .sc-close:hover {
    cursor: pointer;
  }

  @media (min-width: 1300px) {
    display: none;
  }
`;

export const ShoppingCartEmpty = styled.div`
  width: 90%;
  height: 20%;
  margin-bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 600;
`;
