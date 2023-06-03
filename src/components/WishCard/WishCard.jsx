import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WishCard.css";
import { useWish } from "../../context/WishContext";

const WishCard = ({ item }) => {
  const { deleteWish, delWishMoveToCart } = useWish();

  return (
    <div className="wish-card-container">
      <div className="wish-heart">
        <button onClick={() => deleteWish(item._id)}>
          <FontAwesomeIcon icon={faXmark} style={{ color: "red" }} size="xl" />
        </button>
      </div>
      <img src={item.image} alt="product image" />
      <p className="item-name">{item.title}</p>
      <div className="wish-price-cont">
        <p className="price-disCountedPrice">Rs {item.disCountedPrice}</p>
        <p className="price">Rs {item.price}</p>
      </div>
      <p className="item-name">Rating : {item.rating}</p>
      <button className="btn" onClick={() => delWishMoveToCart(item)}>
        Move to Cart
      </button>
    </div>
  );
};

export default WishCard;
