import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 95%;
  margin: 48px auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductItem = styled.div`
  width: 100%;
  max-width: 450px;
  height: 320px;
  margin-top: 24px;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);

  && .product-item-head {
    width: 100%;
    height: 65%;
    position: relative;
    border-radius: 16px 16px 0 0;
  }

  && .product-item-head > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
  }

  && .product-item-head > div {
    width: 20%;
    height: 20%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 12px 0 0;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: rgba(255, 255, 255, 0.8);
  }

  && .product-item-body {
    width: 100%;
    height: 35%;
    padding: 16px 0 0 16px;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
  }

  && .product-item-body > h4 {
    font-size: 1.8rem;
  }

  && .product-item-body > h5 {
    margin-top: 8px;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }

  && .product-item-body > h5 > span {
    display: flex;
    align-items: center;
  }

  && .product-item-price {
    margin-left: 12px;
    color: #a6a6a6;
  }

  && .product-item-star-icon {
    display: inline-block;
    width: 13px;
    height: 13px;
    margin-right: 4px;
    background-image: url("icons/star_icon.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (min-width: 750px) {
    width: 330px;
    margin: 12px;
  }
`;
