import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 95%;
  margin: 48px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  && .categories-button {
    width: 6%;
    max-width: 35px;
    height: 40px;
    border: none;
    font-size: 1.4rem;
    font-weight: 600;
  }

  && .categories-button:hover {
    cursor: pointer;
  }

  && .categories-button-left {
    border-radius: 12px 4px 4px 12px;
  }

  && .categories-button-right {
    border-radius: 4px 12px 12px 4px;
  }
`;

export const CategoryListContainer = styled.div`
  width: 85%;
  max-width: max-content;
  padding: 32px 0;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const CategoryItem = styled.div`
  width: 60px;
  min-width: 60px;
  height: 120px;
  margin-left: 12px;
  border-radius: 30px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0;
  background-color: #fff;

  &.categories-no-margin-left {
    margin-left: 0;
  }

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
