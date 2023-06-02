import { useData } from "../../context/DataContext";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Category.css";

const Category = () => {
  const {
    productState: { categoryData },
  } = useData();
  return (
    <div className="category-container">
      {categoryData.map((item) => (
        <CategoryCard
          key={item.categoryName}
          text={item.categoryName}
          load={item.categoryName}
        />
      ))}
    </div>
  );
};

export default Category;
