import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProductListCard.css";

const ProductListCard = () => {
  return (
    <div className="product-card-container">
      <div className="heart">
        <button onClick={() => console.log("Sdf")}>
          <FontAwesomeIcon icon={faHeart} style={{ color: "#f71839" }} />
        </button>
      </div>
      <img src="/images/jacket-2.jpg" alt="product image" />
      <p className="item-name">Men premium jacket</p>
      <p className="price">Rs 2000</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default ProductListCard;
