import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 95%;
  height: 140px;
  padding: 10px 0;
  margin: 48px auto 0;
  display: flex;
  //overflow: scroll hidden;
  overflow: hidden;
`;

export const CategoryItem = styled.div`
  width: 60px;
  min-width: 60px;
  height: 100%;
  margin-right: 12px;
  border-radius: 30px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0;

  && .category-item-top {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50% 50% 0 0;
  }

  && .category-item-icon {
    width: 85%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 1px solid #d4d4d4;
    background-color: #fff;
  }

  && .category-item-icon > img {
    width: 55%;
    height: 55%;
  }

  && .category-item-bottom {
    width: 100%;
    height: 50%;
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 50% 50%;
    font-weight: 600;
  }

  &.active {
    background-color: #f7d074;
  }

  &.active .category-item-icon {
    border: none;
  }
`;
