import Header from "../Header/Header";
import ProductListCard from "../ProductListCard/ProductListCard";
import "./WishList.css";

import { useData } from "../../context/DataContext";

const WishList = () => {
  const { filterKids } = useData();

  return (
    <div>
      <Header />
      <div className="wish-cont">
        <h3>My WishList</h3>
        <div className="productlist-container">
          {filterKids?.map((item) => (
            <ProductListCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
