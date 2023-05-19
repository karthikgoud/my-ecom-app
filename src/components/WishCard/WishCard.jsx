import React from "react";
import "./WishCard.css";

const WishCard = () => {
  return (
    <div className="wish-card-container">
      {/* <div className="heart" onClick={() => wishUpdate(item._id)}>
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
      </div> */}
      <img src="/images/women-dress-1.jpg" alt="product image" />
      <p className="item-name">men jacket</p>
      <p className="price">Rs 2000</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default WishCard;
