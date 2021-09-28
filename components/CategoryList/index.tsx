import { useState } from "react";
import { CategoriesContainer, CategoryItem } from "./styles";

interface Category {
  id: number;
  name: string;
  icon: string;
}

const initialState: Category[] = [
  {
    id: 1,
    name: "All",
    icon: "https://image.flaticon.com/icons/svg/701/701965.svg",
  },
  {
    id: 2,
    name: "Pizza",
    icon: "https://image.flaticon.com/icons/svg/599/599995.svg",
  },
  {
    id: 3,
    name: "Asian",
    icon: "https://image.flaticon.com/icons/svg/1895/1895684.svg",
  },
  {
    id: 4,
    name: "Burgers",
    icon: "https://image.flaticon.com/icons/svg/883/883806.svg",
  },
  {
    id: 5,
    name: "Barbecue",
    icon: "https://image.flaticon.com/icons/svg/933/933310.svg",
  },
  {
    id: 6,
    name: "Dessers",
    icon: "https://image.flaticon.com/icons/svg/174/174394.svg",
  },
  {
    id: 7,
    name: "Thai",
    icon: "https://image.flaticon.com/icons/svg/135/135367.svg",
  },
  {
    id: 8,
    name: "Sushi",
    icon: "https://image.flaticon.com/icons/svg/1900/1900683.svg",
  },
];

export const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>(initialState);

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
