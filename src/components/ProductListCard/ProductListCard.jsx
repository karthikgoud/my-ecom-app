import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProductListCard.css";
import { useData } from "../../context/DataContext";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWish } from "../../context/WishContext";

const ProductListCard = ({ item }) => {
  const { wishUpdate } = useData();

  const { addToCart } = useCart();

  const { addWish, deleteWish } = useWish();

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
      <NavLink to={`/product/${item._id}`}>
        <img src={item.image} alt="product image" />
      </NavLink>
      <p className="item-name">{item.title}</p>
      <p className="price">Rs {item.price}</p>
      <p className="item-name">Rating : {item.rating}</p>
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
