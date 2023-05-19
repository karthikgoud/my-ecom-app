import { NavLink } from "react-router-dom";
import "./CategoryCard.css";
import { useData } from "../../context/DataContext";

const CategoryCard = ({ text, type }) => {
  const { dispatch } = useData();

  return (
    <NavLink to={`/product`} onClick={() => dispatch({ type })}>
      <div className="category-card-container">
        <p>{text}</p>
      </div>
    </NavLink>
  );
};

export default CategoryCard;
