import CategoryCard from "../CategoryCard/CategoryCard";
import "./Category.css";

const Category = () => {
  return (
    <div className="category-container">
      <CategoryCard type="Men" id="1" />
      <CategoryCard type="Women" id="2" />
      <CategoryCard type="Kids" id="3" />
      <CategoryCard type="Mobiles" id="4" />
    </div>
  );
};

export default Category;
