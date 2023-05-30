import { useData } from "../../context/DataContext";
import AddressCard from "../AddressCard/AddressCard";
import "./CheckOutDetails.css";

const CheckOutDetails = ({ cartTotal, address }) => {
  const {
    productState: { cartData },
  } = useData();

  const {
    name,
    houseNo,
    colony,
    area,
    city,
    state,
    country,
    postalCode,
    phoneNo,
  } = address;

  return (
    <div className="checkout-price-details-cont">
      <h4>ORDER DETAILS</h4>
      <hr />
      <div>
        <div className="checkout-price-list-item">
          <p className="item-heading">Items</p>
          <p className="item-heading">QTY</p>
        </div>
        {cartData.map((item) => (
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
      <div className="total-cont">
        <div>Total Amount</div>
        <div>₹{cartTotal.grandTotal}</div>
      </div>
      <hr />
      <h4>DELIVER TO</h4>
      <hr />
      <div>
        <div className="address-name">{name}</div>
        <div>
          House no : {houseNo} , {colony}, {area}, {city},{state},{country}
          {postalCode}
        </div>
        <div>Phone: {phoneNo}</div>
      </div>
      <button className="btn-order">PLACE ORDER</button>
    </div>
  );
};

export default CheckOutDetails;