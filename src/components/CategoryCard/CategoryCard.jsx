import { NavLink } from "react-router-dom";
import "./CategoryCard.css";
import { useData } from "../../context/DataContext";

const CategoryCard = ({ text, load }) => {
  const { dispatch } = useData();

  return (
    <NavLink
      to={`/product`}
      onClick={() => dispatch({ type: "CATEGORY_NAVIGATE", payload: load })}
    >
      <div className="category-card-container">
        <p>{text}</p>
      </div>
    </NavLink>
  );
};

export default CategoryCard;
