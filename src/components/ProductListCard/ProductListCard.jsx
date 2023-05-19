import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProductListCard.css";
import { useData } from "../../context/DataContext";
import { NavLink } from "react-router-dom";

const ProductListCard = ({ item }) => {
  const { wishUpdate } = useData();

  return (
    <div className="product-card-container">
      <div className="heart" onClick={() => wishUpdate(item._id)}>
        <button>
          {item.isStarred ? (
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#f71839" }}
              size="xl"
            />
          ) : (
            <FontAwesomeIcon icon={faHeartRegular} size="xl" />
          )}
        </button>
      </div>
      <NavLink to={`/product/${item._id}`}>
        <img src={item.image} alt="product image" />
      </NavLink>
      <p className="item-name">{item.title}</p>
      <p className="price">Rs {item.price}</p>
      <p>Rating : {item.rating}</p>
      <p>{item._id}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default ProductListCard;
