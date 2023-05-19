import CartPageCard from "../CartPageCard/CartPageCard";
import CartPriceDetails from "../CartPriceDetails/CartPriceDetails";
import Header from "../Header/Header";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="cart-section">
        <h3 className="cart-title">My Cart(1)</h3>
        <div className="cart-card-cont">
          <CartPageCard />
          <CartPriceDetails />
        </div>
      </div>
    </div>
  );
};

export default Cart;
