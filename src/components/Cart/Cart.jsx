import { useCart } from "../../context/CartContext";
import CartPageCard from "../CartPageCard/CartPageCard";
import CartPriceDetails from "../CartPriceDetails/CartPriceDetails";
import Header from "../Header/Header";
import "./Cart.css";

const Cart = () => {
  const { cart } = useCart();
  console.log("cart state", cart);

  return (
    <div>
      <Header />
      <div className="cart-section">
        <div>
          <h3 className="cart-title">My Cart({cart?.length})</h3>
        </div>
        <div className="card-section">
          {cart?.length === 0 && <h1>No items in cart</h1>}
          <div className="cart-card-cont">
            {cart?.map((item) => (
              <CartPageCard item={item} />
            ))}
          </div>
          <CartPriceDetails />
        </div>
      </div>
    </div>
  );
};

export default Cart;
