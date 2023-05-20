import "./CartPageCard.css";

const CartPageCard = ({ item }) => {
  return (
    <div className="cart-card-container">
      <div className="cart-card-img">
        <img src={item.image} alt="cart image" />
      </div>
      <div className="cart-card-details-cont">
        <div className="cart-card-details">
          <h3>{item.title}</h3>
          <div>
            <div className="cart-card-price">
              <h2>₹{item.disCountedPrice}</h2>
              <h4>₹{item.price}</h4>
            </div>
            <div className="cart-card-price">
              <h4>{item.discount}</h4>
            </div>
            <p className="cart-card-quantity-cont">
              Quantity:
              <div className="cart-card-quantity">
                <div>-</div>
                <input type="text" value={1} />
                <div>+</div>
              </div>
            </p>
          </div>
        </div>
        <button className="cart-card-btn remove">Remove from Cart</button>
        <button className="cart-card-btn move">Move to WishList</button>
      </div>
    </div>
  );
};

export default CartPageCard;
