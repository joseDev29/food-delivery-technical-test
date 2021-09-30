import styled from "styled-components";

export const OrderDataContainer = styled.div`
  width: 90%;
  max-width: 360px;
  height: 18%;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 12px;
  background-color: #5b2e99;

  && .order-data-address {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
    font-weight: 500;
  }

  && .order-data-address > p {
    color: #d4d1d1;
  }

  && .order-data-address > span {
    color: #f7d074;
    user-select: none;
  }

  && .order-data-address > span:hover {
    cursor: pointer;
  }

  && .order-data-time {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 500;
  }

  && .order-data-time > div {
    display: flex;
    align-items: center;
  }

  && .order-data-time > div > span {
    margin-right: 8px;
    color: #f7d074;
  }

  && .order-data-time > div > p {
    color: #d4d1d1;
  }

  && .order-data-time > p {
    color: #f7d074;
  }
`;
