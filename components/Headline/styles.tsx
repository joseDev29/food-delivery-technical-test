import styled from "styled-components";

export const HeadlineContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px auto 0;
  border-radius: 12px;
  background-color: #fcf4e5;

  && .headline-image {
    height: 120px;
    margin-top: 12px;
    order: 3;
  }

  && .headline-text {
    margin-top: 16px;
    text-align: center;
  }

  && .headline-text > h3 {
    font-size: 1.6rem;
    color: #eb703b;
  }

  && .headline-text > h3 > span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("icons/party_icon.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  && .headline-text > h5 {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 600;
    color: #a8a8a8;
  }

  && .headline-link {
    width: 100px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 700;
    color: #eb703b;
  }

  && .headline-link > span {
    font-size: 2rem;
    font-weight: 800;
  }

  @media (min-width: 550px) {
    height: 120px;
    margin-top: 48px;
    flex-direction: row;
    justify-content: space-around;

    && .headline-image {
      height: 120%;
      order: initial;
      align-self: flex-end;
    }

    && .headline-text {
      text-align: start;
    }

    && .headline-link {
      margin-bottom: 2%;
      align-self: flex-end;
    }
  }
`;
