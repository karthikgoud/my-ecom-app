import { useState } from "react";

import { NavLink } from "react-router-dom";
import "./CartPriceDetails.css";
import { faTag, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CouponModal from "../CouponModal/CouponModal";
import { useData } from "../../context/DataContext";

const CartPriceDetails = ({ cartTotal }) => {
  const [couponModalShow, setCouponModalShow] = useState(false);
  const {
    productDispatch,
    productState: { couponDiscount },
  } = useData();

  function modalHandler() {
    setCouponModalShow((prev) => !prev);
  }
  return (
    <div className="cart-price-details-cont">
      <div className="coupon-cont">
        <div>
          <FontAwesomeIcon icon={faTag} /> Have a coupon ?
        </div>
        <button id="btn-coupon" onClick={modalHandler}>
          Apply
        </button>
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
      {couponDiscount !== null && (
        <div className="cart-price-list-item">
          <p className="coupon-text">
            {couponDiscount === 0.5
              ? "50% Coupon Discount Applied"
              : "10% Coupon Discount Applied"}
          </p>
          <p
            className="coupon-close"
            onClick={() =>
              productDispatch({ type: "RESET_COUPON", payload: null })
            }
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </p>
        </div>
      )}
      <hr />
      <div className="total-cont">
        <div>Total Amount</div>
        <div>₹{cartTotal.grandTotal}</div>
      </div>
      <hr />
      <p className="save-text">
        You will save ₹
        {cartTotal.itemDiscount +
          cartTotal.moneySavedTotal * (1 - (couponDiscount ?? 1))}{" "}
        on this order
      </p>
      <NavLink to="/checkout" className="NavLink">
        <button className="btn-checkout">Check Out</button>
      </NavLink>

      <CouponModal show={couponModalShow} onClose={modalHandler} />
    </div>
  );
};

export default CartPriceDetails;
