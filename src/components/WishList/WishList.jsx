import Header from "../Header/Header";
import "./WishList.css";

import { useWish } from "../../context/WishContext";
import WishCard from "../WishCard/WishCard";

const WishList = () => {
  const { wish } = useWish();
  // console.log("wishstate", wish);

  return (
    <div>
      <Header />
      <div className="wish-cont">
        <h3>My WishList</h3>
        {wish.length === 0 && <h1>No items</h1>}
        <div className="productlist-container">
          {wish?.map((item) => (
            <WishCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
