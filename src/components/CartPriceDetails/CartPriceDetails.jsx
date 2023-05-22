import "./CartPriceDetails.css";

const CartPriceDetails = ({ cartTotal }) => {
  // console.log(cartTotal);
  return (
    <div className="cart-price-details-cont">
      <h4>Price Details</h4>
      <hr />
      <div className="cart-price-list-item">
        <p>
          price ({cartTotal.totalItems}{" "}
          {cartTotal.totalItems > 1 ? "items" : "item"} )
        </p>
        <p>₹{cartTotal.itemPriceTotal}</p>
      </div>
      <div className="cart-price-list-item">
        <p>Discount</p>
        <p>₹{cartTotal.itemDiscount}</p>
      </div>
      <div className="cart-price-list-item">
        <p>Delivery charges </p>
        <p>₹{cartTotal.deliveryTotal}</p>
      </div>
      <hr />
      <div className="total-cont">
        <div>Total Amount</div>
        <div>₹{cartTotal.grandTotal}</div>
      </div>
      <hr />
      <p>You will save ₹{cartTotal.itemDiscount} on this order</p>
      <button className="btn-order">Place Order</button>
    </div>
  );
};

export default CartPriceDetails;
