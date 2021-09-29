import styled, { css } from "styled-components";

export const ShoppingCartMain = styled.div<any>`
  position: fixed;
  width: 85%;
  min-width: 300px;
  max-width: 500px;
  height: 100vh;
  right: ${(props) => (props.toggle ? css`0` : css`-85%`)};
  background-color: #edede6;
  transition-property: right;
  transition-duration: 500ms;
  transition-timing-function: ease-in;
  transition-delay: 0;

  @media (min-width: 1000px) {
    right: 0;
  }
`;
