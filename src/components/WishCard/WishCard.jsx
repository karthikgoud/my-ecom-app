import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WishCard.css";
import { useWish } from "../../context/WishContext";

const WishCard = ({ item }) => {
  const { deleteWish, delWishMoveToCart } = useWish();

  return (
    <div className="wish-card-container">
      <div className="heart">
        <button onClick={() => deleteWish(item._id)}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#f71839" }}
            size="xl"
          />
        </button>
      </div>
      <img src={item.image} alt="product image" />
      <p className="item-name">{item.title}</p>
      <p className="price">Rs {item.price}</p>
      <p className="item-name">Rating : {item.rating}</p>
      <button className="btn" onClick={() => delWishMoveToCart(item)}>
        Move to Cart
      </button>
    </div>
  );
};

export default WishCard;
