import { useCart } from "../../context/CartContext";
import { useData } from "../../context/DataContext";
import CartPageCard from "../CartPageCard/CartPageCard";
import CartPriceDetails from "../CartPriceDetails/CartPriceDetails";
import Header from "../Header/Header";
import "./Cart.css";

const Cart = () => {
  const {
    productState: { cartData },
  } = useData();

  const itemPriceTotal = cartData?.reduce(
    (acc, cur) => acc + Number(cur.price * cur.qty),
    0
  );

  const itemDiscount = cartData?.reduce(
    (acc, cur) => acc + Number(cur.amountSaved * cur.qty),
    0
  );

  const deliveryTotal = cartData?.reduce(
    (acc, cur) => acc + Number(cur.deliveryCharges * cur.qty),
    0
  );

  const grandTotal = itemPriceTotal - itemDiscount + deliveryTotal;

  const totalItems = cartData?.reduce((acc, cur) => acc + cur.qty, 0);

  const cartTotal = {
    itemPriceTotal,
    itemDiscount,
    deliveryTotal,
    grandTotal,
    totalItems,
  };

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
          {cartData?.length !== 0 && <CartPriceDetails cartTotal={cartTotal} />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
