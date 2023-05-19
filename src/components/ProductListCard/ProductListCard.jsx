import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProductListCard.css";
import { useData } from "../../context/DataContext";

const ProductListCard = ({ item }) => {
  const { wishUpdate } = useData();

  return (
    <div className="product-card-container">
      <div className="heart" onClick={() => wishUpdate(item._id)}>
        <button>
          {item.isStarred ? (
            <FontAwesomeIcon icon={faHeart} style={{ color: "#f71839" }} />
          ) : (
            <FontAwesomeIcon icon={faHeart} />
          )}
        </button>
      </div>
      <img src={item.image} alt="product image" />
      <p className="item-name">{item.title}</p>
      <p className="price">Rs {item.price}</p>
      <p>Rating : {item.rating}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default ProductListCard;
