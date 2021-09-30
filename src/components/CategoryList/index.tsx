import { useRef, useState } from "react";

import { selectCategories } from "../../context/generalSlice";
import { useStateSelector } from "../../context/hooks";

import {
  CategoriesContainer,
  CategoryListContainer,
  CategoryItem,
} from "./styles";

export const CategoryList = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const categories = useStateSelector(selectCategories);

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const onChangeCategory = (category: string) => {
    setActiveCategory(category);
  };

  const onLeftScroll = () => {
    scrollContainer.current?.scrollTo({
      left: scrollContainer.current.scrollLeft - 120,
    });
  };

  const onRightScroll = () => {
    scrollContainer.current?.scrollTo({
      left: scrollContainer.current.scrollLeft + 120,
    });
  };

  return (
    <CategoriesContainer>
      <button
        className="categories-button categories-button-left"
        onClick={onLeftScroll}
      >
        {"<"}
      </button>

      <CategoryListContainer ref={scrollContainer}>
        {categories.map(({ id, name, icon }, index) => (
          <CategoryItem
            key={id}
            className={`
              ${activeCategory === name ? "active" : ""} 
              ${!index && "categories-no-margin-left"}
            `}
            onClick={() => {
              onChangeCategory(name);
            }}
          >
            <div className="category-item-top">
              <div className="category-item-icon">
                <img src={icon} alt={`${name} category icon`} />
              </div>
            </div>
            <div className="category-item-bottom">{name}</div>
          </CategoryItem>
        ))}
      </CategoryListContainer>

      <button
        className="categories-button categories-button-right"
        onClick={onRightScroll}
      >
        {">"}
      </button>
    </CategoriesContainer>
  );
};
