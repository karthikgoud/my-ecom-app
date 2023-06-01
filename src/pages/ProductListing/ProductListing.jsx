import Header from "../../components/Header/Header";
import ProductListCard from "../../components/ProductListCard/ProductListCard";
import Filters from "../../components/Filters-component/Filters";

import "./ProductListing.css";
import { useData } from "../../context/DataContext";
import LoaderProductList from "../../components/LoaderProductList/LoaderProductList";

const ProductListing = () => {
  const {
    transformedProducts,
    productState: { loader },
  } = useData();

  return (
    <div>
      <Header />
      <div className="filter-main-container">
        <Filters />
        <div className="loader-cont">
          {loader ? (
            <LoaderProductList />
          ) : (
            <div className="productlist-container">
              {transformedProducts()?.map((item) => (
                <ProductListCard key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
