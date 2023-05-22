import { useCart } from "../../context/CartContext";
import CartPageCard from "../CartPageCard/CartPageCard";
import CartPriceDetails from "../CartPriceDetails/CartPriceDetails";
import Header from "../Header/Header";
import "./Cart.css";

const Cart = () => {
  const { cart } = useCart();
  console.log("cart state", cart);

  const itemPriceTotal = cart?.reduce(
    (acc, cur) => acc + Number(cur.price * cur.qty),
    0
  );

  const itemDiscount = cart?.reduce(
    (acc, cur) => acc + Number(cur.amountSaved * cur.qty),
    0
  );

  const deliveryTotal = cart?.reduce(
    (acc, cur) => acc + Number(cur.deliveryCharges * cur.qty),
    0
  );

  const grandTotal = itemPriceTotal + itemDiscount + deliveryTotal;

  const totalItems = cart.reduce((acc, cur) => acc + cur.qty, 0);

  const cartTotal = {
    itemPriceTotal,
    itemDiscount,
    deliveryTotal,
    grandTotal,
    totalItems,
  };

  // const uniqueProducts = cart.reduce((accumulator, current) => {
  //   if (!accumulator.find((item) => item.title === current.title)) {
  //     return [...accumulator, current];
  //   }
  //   return accumulator;
  // }, []);

  return (
    <div>
      <Header />
      <div className="cart-section">
        <div>
          <h3 className="cart-title">My Cart({cart?.length})</h3>
        </div>
        <div className="card-section">
          {cart?.length === 0 && (
            <h1 className="cart-msg">Add Items To Cart</h1>
          )}
          <div className="cart-card-cont">
            {cart?.map((item) => (
              <CartPageCard item={item} />
            ))}
          </div>
          <CartPriceDetails cartTotal={cartTotal} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
