import { NavLink } from "react-router-dom";
import "./CartPriceDetails.css";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPriceDetails = ({ cartTotal }) => {
  // console.log(cartTotal);
  return (
    <div className="cart-price-details-cont">
      <div className="coupon-cont">
        <div>
          <FontAwesomeIcon icon={faTag} /> Have a coupon ?
        </div>
        <button id="btn-coupon">Apply</button>
      </div>
      <hr />
      <h4>Cart Price Details</h4>
      <hr />
      <div className="cart-price-list-item">
        <p>
          Price ({cartTotal.totalItems}{" "}
          {cartTotal.totalItems > 1 ? "items" : "item"} )
        </p>
        <p>₹{cartTotal.itemPriceTotal}</p>
      </div>
      <div className="cart-price-list-item">
        <p>Discount</p>
        <p>-₹{cartTotal.itemDiscount}</p>
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
      <p className="save-text">
        You will save ₹{cartTotal.itemDiscount} on this order
      </p>
      <NavLink to="/checkout" className="NavLink">
        <button className="btn-checkout">Check Out</button>
      </NavLink>
    </div>
  );
};

export default CartPriceDetails;
