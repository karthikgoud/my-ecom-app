import "./CartPriceDetails.css";

const CartPriceDetails = () => {
  return (
    <div className="cart-price-details-cont">
      <h4>Price Details</h4>
      <hr />
      <div className="cart-price-list-item">
        <p>price (1 item)</p>
        <p>₹2000</p>
      </div>
      <div className="cart-price-list-item">
        <p>Discount</p>
        <p>-₹1000</p>
      </div>
      <div className="cart-price-list-item">
        <p>Delivery charges </p>
        <p>₹499</p>
      </div>
      <hr />
      <div className="total-cont">
        <div>Total Amount</div>
        <div>₹2499</div>
      </div>
      <hr />
      <p>You will save ₹1000 on this order</p>
      <button className="btn-order">Place Order</button>
    </div>
  );
};

export default CartPriceDetails;
