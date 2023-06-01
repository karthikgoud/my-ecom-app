import Header from "../../components/Header/Header";
import "./CheckOut.css";
import { useData } from "../../context/DataContext";
import { calculateTotal } from "../../Services/Services";
import CheckOutDetails from "../../components/CheckOutDetails/CheckOutDetails";
import AddressCard from "../../components/AddressCard/AddressCard";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  const {
    productState: { cartData, addressList },
  } = useData();

  return (
    <div>
      <Header />
      <div className="checkout-cont">
        <h1>CheckOut</h1>
        <div className="cards-cont">
          <div className="addres-card-cont">
            {addressList.map((address) => (
              <AddressCard address={address} />
            ))}
            <NavLink className="checkout-add-address-btn" to="/userprofile">
              Add a New Address
            </NavLink>
          </div>
          <CheckOutDetails
            cartTotal={calculateTotal(cartData)}
            address={addressList[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
