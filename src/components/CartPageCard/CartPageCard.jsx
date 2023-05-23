import { useCart } from "../../context/CartContext";
import "./CartPageCard.css";

const CartPageCard = ({ item }) => {
  const { removeFromCart, delCartMoveToWish, removeOne, addOne } = useCart();

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
              <h4 className="price-strike">₹{item.price}</h4>
            </div>
            <div className="cart-card-price">
              <h4>{item.discount} OFF</h4>
            </div>
            <p className="cart-card-quantity-cont">
              Quantity:
              <div className="cart-card-quantity">
                {item.qty > 0 && (
                  <button
                    className="cart-card-btn-round"
                    onClick={() => removeOne(item)}
                  >
                    -
                  </button>
                )}
                {item.qty < 1 && (
                  <button className="cart-card-btn-round">-</button>
                )}
                <input type="text" value={item.qty} />
                <button
                  className="cart-card-btn-round"
                  onClick={() => addOne(item)}
                >
                  +
                </button>
              </div>
            </p>
          </div>
        </div>
        <button
          className="cart-card-btn remove"
          onClick={() => removeFromCart(item)}
        >
          Remove from Cart
        </button>
        <button
          className="cart-card-btn move"
          onClick={() => delCartMoveToWish(item)}
        >
          Move to WishList
        </button>
      </div>
    </div>
  );
};

export default CartPageCard;
