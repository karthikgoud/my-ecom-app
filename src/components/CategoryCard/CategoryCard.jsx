import { NavLink } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ type, id }) => {
  return (
    <NavLink to={`/product/${id}`}>
      <div className="category-card-container">
        <p>{type}</p>
      </div>
    </NavLink>
  );
};

export default CategoryCard;
