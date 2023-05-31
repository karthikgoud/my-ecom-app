import { useData } from "../../context/DataContext";
import "./AddressCard.css";

const AddressCard = ({ address }) => {
  const { productDispatch } = useData();
  // console.log("adasda", address);
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

  function handleDeleveryAddress(address) {
    productDispatch({ type: "SET_DELEVERY_ADDRESS", payload: address });
  }

  return (
    <div className="address-card">
      <input
        type="radio"
        id="address1"
        onChange={() => handleDeleveryAddress(address)}
        name="address"
      />
      <label htmlFor="address1">
        <div className="address-name">{name}</div>
        <div>
          House no : {houseNo} , {colony}, {area}, {city},{state},{country}
          {postalCode}
        </div>
        <div>Phone: {phoneNo}</div>
      </label>
    </div>
  );
};

export default AddressCard;
