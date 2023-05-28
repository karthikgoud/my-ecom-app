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
          type={item.type}
        />
      ))}
    </div>
  );
};

export default Category;
