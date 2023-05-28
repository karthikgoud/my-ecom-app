import Header from "../Header/Header";
import "./WishList.css";

import WishCard from "../WishCard/WishCard";
import { useData } from "../../context/DataContext";

const WishList = () => {
  const {
    productState: { wishListData },
  } = useData();

  return (
    <div>
      <Header />
      <div className="wish-cont">
        <h3>My WishList</h3>
        {wishListData?.length === 0 && <h1>No items</h1>}
        <div className="productlist-container">
          {wishListData?.map((item) => (
            <WishCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
