import { useState } from "react";

import { selectCategories } from "../../context/generalSlice";
import { useStateSelector } from "../../context/hooks";

import { CategoriesContainer, CategoryItem } from "./styles";

export const CategoryList = () => {
  const categories = useStateSelector(selectCategories);

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const onChangeCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <CategoriesContainer>
      {categories.map(({ id, name, icon }) => (
        <CategoryItem
          key={id}
          className={activeCategory === name ? "active" : ""}
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
    </CategoriesContainer>
  );
};
