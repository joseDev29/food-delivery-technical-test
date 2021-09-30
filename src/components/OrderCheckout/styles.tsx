import styled from "styled-components";

export const OrderCheckoutMain = styled.div`
  width: 100%;
  height: 18%;
  max-height: 120px;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  && .order-price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 12px;
    border-bottom: 0.5px solid gray;
  }

  && .order-price > p {
    font-size: 1.4rem;
  }

  && .order-price > h5 {
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 2.6rem;
    padding-right: 12px;
  }

  && .order-actions {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  && .order-checkout-button {
    width: 130px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px 0 0 12px;
    font-size: 1.2rem;
    font-weight: 600;
    background-color: #f7d074;
    user-select: none;
  }

  && .order-checkout-button:hover {
    cursor: pointer;
  }

  && .order-checkout-button > span {
    margin-left: 4px;
    font-size: 1.6rem;
  }
`;

export const PersonsCounter = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 1.3rem;
    font-weight: 600;
  }

  & > div {
    width: 100%;
    height: 30px;
    margin-top: 6px;
    display: flex;
    align-items: center;
    border: 0.5px solid #000;
    border-radius: 12px;
  }

  & > div > span {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
    font-size: 1.4rem;
    font-weight: 600;
  }

  && .counter-persons-btn {
    cursor: pointer;
    user-select: none;
  }

  && .counter-persons-value {
    border-width: 0 0.5px 0 0.5px;
    border-style: solid;
    border-color: #000;
  }
`;
