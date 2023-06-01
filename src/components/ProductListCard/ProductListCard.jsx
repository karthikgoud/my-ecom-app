import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProductListCard.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWish } from "../../context/WishContext";

const ProductListCard = ({ item }) => {
  const { addToCart } = useCart();

  const { addWish, deleteWish, wishUpdate } = useWish();

  return (
    <div className="product-card-container">
      <div className="heart" onClick={() => wishUpdate(item._id)}>
        {item.isWished && (
          <button onClick={() => deleteWish(item._id)}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#f71839" }}
              size="xl"
            />
          </button>
        )}
        {!item.isWished && (
          <button onClick={() => addWish(item)}>
            <FontAwesomeIcon icon={faHeartRegular} size="xl" />
          </button>
        )}
      </div>
      <NavLink className="product-card-img" to={`/product/${item._id}`}>
        <img src={item.image} alt="product image" />
        <div className="card-info">
          <p className="item-name">{item.title}</p>
          <div className="price-rating-cont">
            <div className="price-cont">
              <p className="price-disCountedPrice">₹{item.disCountedPrice}</p>
              <p className="price">₹{item.price}</p>
            </div>
            <p className="item-rating">⭐{item.rating}</p>
          </div>
        </div>
      </NavLink>
      {!item.isCarted && (
        <button className="btn" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      )}
      {item.isCarted && (
        <NavLink className="cart-link" to="/cart">
          Go to Cart
        </NavLink>
      )}
    </div>
  );
};

export default ProductListCard;
