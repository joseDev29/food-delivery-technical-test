import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 95%;
  margin: 32px auto 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2%;
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2%;
  }
`;

export const ProductItem = styled.div`
  width: 100%;
  max-width: 360px;
  height: 230px;
  justify-self: center;
  margin-top: 24px;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);

  && .product-item-head {
    width: 100%;
    height: 60%;
    position: relative;
    border-radius: 12px 12px 0 0;
  }

  && .product-item-head > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }

  && .product-item-head > div {
    width: 25%;
    height: 20%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 12px 0 0;
    font-size: 1.1rem;
    font-weight: 700;
    background-color: rgba(255, 255, 255, 0.8);
  }

  && .product-item-body {
    width: 100%;
    height: 40%;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 12px 12px;
    background-color: #fff;
  }

  && .product-item-body > h4 {
    width: 90%;
    font-size: 1.5rem;
  }

  && .product-item-body > h5 {
    width: 90%;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
  }

  && .product-item-body > h5 > span {
    display: flex;
    align-items: center;
  }

  && .product-item-data {
    display: flex;
    justify-content: space-between;
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

  && .product-item-button {
    user-select: none;
  }

  && .product-item-button:hover {
    cursor: pointer;
  }
`;
