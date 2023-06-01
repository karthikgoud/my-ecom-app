import { calculateTotal } from "../../Services/Services";
import { useData } from "../../context/DataContext";
import CartPageCard from "../../components/CartPageCard/CartPageCard";
import CartPriceDetails from "../../components/CartPriceDetails/CartPriceDetails";
import Header from "../../components/Header/Header";
import "./Cart.css";

const Cart = () => {
  const {
    productState: { cartData, couponDiscount },
  } = useData();

  return (
    <div>
      <Header />
      <div className="cart-section">
        <div>
          <h3 className="cart-title">My Cart({cartData?.length})</h3>
        </div>
        <div className="card-section">
          {cartData?.length === 0 && (
            <h1 className="cart-msg">Add Items To Cart</h1>
          )}
          <div className="cart-card-cont">
            {cartData?.map((item) => (
              <CartPageCard item={item} />
            ))}
          </div>
          {cartData?.length !== 0 && (
            <CartPriceDetails
              cartTotal={calculateTotal(cartData, couponDiscount ?? 1)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
