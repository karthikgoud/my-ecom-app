import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import ProductListCard from "../ProductListCard/ProductListCard";
import Filters from "../Filters-component/Filters";

import "./ProductListing.css";

const ProductListing = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div>
      <Header />
      <div className="filter-main-container">
        <Filters />
        <div className="productlist-container">
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
