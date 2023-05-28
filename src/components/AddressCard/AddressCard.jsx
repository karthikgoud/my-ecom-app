import "./AddressCard.css";

const AddressCard = ({ address }) => {
  console.log("adasda", address);
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
    <div className="address-card">
      <input type="radio" id="address1" />
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
