import { useData } from "../../context/DataContext";
import { ToastHandler } from "../Toast/Toast";
import "./CheckOutDetails.css";
import { faTag, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckOutDetails = ({ cartTotal, address }) => {
  const {
    productDispatch,
    productState: { cartData, orderAddress, couponDiscount },
  } = useData();

  function handlePlaceOrder() {
    ToastHandler("success", "Order Placed, Thank You !!!");
  }

  return (
    <div className="checkout-price-details-cont">
      <h4>ORDER SUMMARY</h4>
      <hr />
      <div>
        <div className="checkout-price-list-item">
          <p className="item-heading">Items</p>
          <p className="item-heading">QTY</p>
        </div>
        {cartData?.map((item) => (
          <div className="checkout-price-list-item">
            <p>{item.title}</p>
            <p>{item.qty}</p>
          </div>
        ))}
      </div>
      <hr />
      <h4>PRICE DETAILS</h4>
      <hr />
      <div className="checkout-price-list-item">
        <p>
          Price ({cartTotal.totalItems}{" "}
          {cartTotal.totalItems > 1 ? "items" : "item"} )
        </p>
        <p>₹{cartTotal.itemPriceTotal}</p>
      </div>
      <div className="checkout-price-list-item">
        <p>Discount</p>
        <p>-₹{cartTotal.itemDiscount}</p>
      </div>
      <div className="checkout-price-list-item">
        <p>Delivery charges </p>
        <p>₹{cartTotal.deliveryTotal}</p>
      </div>
      {couponDiscount !== null && (
        <div className="cart-price-list-item coupon-close">
          <p>
            {couponDiscount === 0.5
              ? "50% Coupon Discount Applied"
              : "10% Coupon Discount Applied"}
          </p>
        </div>
      )}
      <div className="total-cont">
        <div>Total Amount</div>
        <div>₹{cartTotal.grandTotal}</div>
      </div>
      <hr />
      <h4>DELIVER TO</h4>
      <hr />
      {!orderAddress.name && <p>Please select delivery address</p>}
      {orderAddress.name && (
        <div>
          <div className="address-name">{orderAddress.name}</div>
          <div>
            House no : {orderAddress.houseNo} , {orderAddress.colony},{" "}
            {orderAddress.area}, {orderAddress.city},{orderAddress.state},
            {orderAddress.country}
            {orderAddress.postalCode}
          </div>
          <div>Phone: {orderAddress.phoneNo}</div>
        </div>
      )}

      <button onClick={handlePlaceOrder} className="btn-order">
        PLACE ORDER
      </button>
    </div>
  );
};

export default CheckOutDetails;
