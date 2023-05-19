import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { NavLink, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  // console.log(productId);

  const [singleProduct, setSingleProduct] = useState({});

  const gettingDetailByProductId = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      // console.log(data);
      setSingleProduct(data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingDetailByProductId();
  }, [productId]);

  // console.log("state", singleProduct);

  return (
    <div className="product-page">
      <NavLink to="/product">
        <h3>Back</h3>
      </NavLink>
      <div className="product-details-cont">
        <img src={singleProduct.image} alt="product name" />
        <h1>{singleProduct.title}</h1>
        <h3>Price : Rs.{singleProduct.price}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
