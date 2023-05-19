import { useData } from "../../context/DataContext";
import Header from "../Header/Header";
import "./ProductDetails.css";
import { NavLink, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);

  const { filterKids } = useData();

  const selectedProduct = filterKids.filter((item) => item._id === productId);
  console.log(selectedProduct[0]);

  const { title, price, image, categoryName, rating, isStarred } =
    selectedProduct[0];

  return (
    <div className="product-page">
      <NavLink to="/product">
        <h3>Back</h3>
      </NavLink>
      <div className="product-details-cont">
        <img src={image} alt="product name" />
        <h1>{title}</h1>
        <h3>Price : Rs.{price}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
