import { useData } from "../../context/DataContext";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Category.css";

const Category = () => {
  const { category } = useData();
  return (
    <div className="category-container">
      {category.map((item) => (
        <CategoryCard
          key={item.categoryName}
          text={item.categoryName}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default Category;
