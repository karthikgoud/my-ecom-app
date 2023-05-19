import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import ProductListCard from "../ProductListCard/ProductListCard";
import Filters from "../Filters-component/Filters";

import "./ProductListing.css";
import { useData } from "../../context/DataContext";

const ProductListing = () => {
  const { productId } = useParams();
  // console.log(productId);

  const { filterKids } = useData();

  return (
    <div>
      <Header />
      <div className="filter-main-container">
        <Filters />
        <div className="productlist-container">
          {filterKids?.map((item) => (
            <ProductListCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
