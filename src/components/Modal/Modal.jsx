import { useEffect, useState } from "react";
import "./Modal.css";
import { useData } from "../../context/DataContext";

const Modal = ({ show, onClose, addressFields }) => {
  const { productDispatch } = useData();

  const newAddressFields = {
    name: "",
    houseNo: "",
    colony: "",
    area: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    phoneNo: "",
  };

  const [newAddress, setNewAddress] = useState(newAddressFields);

  useEffect(() => {
    setNewAddress((prev) => ({ ...prev, ...addressFields }));
  }, [addressFields]);

  if (!show) {
    return null;
  }

  function fillFormInput(event, key) {
    const { value } = event.target;
    setNewAddress((prev) => ({ ...prev, [key]: value }));
  }

  function handleSave() {
    productDispatch({ type: "ADD_NEW_ADDRESS", payload: newAddress });
    onClose();
    setNewAddress(newAddressFields);
  }

  function handleUpdate() {
    productDispatch({ type: "UPDATE_ADDRESS", payload: newAddress });
    onClose();
    setNewAddress(newAddressFields);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add New Address</h4>
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={newAddress.name}
            onChange={(e) => fillFormInput(e, "name")}
          />
          <input
            type="text"
            placeholder="Enter houseNo"
            name="houseNo"
            value={newAddress.houseNo}
            onChange={(e) => fillFormInput(e, "houseNo")}
          />
          <input
            type="text"
            placeholder="Enter area"
            name="area"
            value={newAddress.area}
            onChange={(e) => fillFormInput(e, "area")}
          />
          <input
            type="text"
            placeholder="Enter colony"
            name="colony"
            value={newAddress.colony}
            onChange={(e) => fillFormInput(e, "colony")}
          />
          <input
            type="text"
            placeholder="Enter city"
            name="city"
            value={newAddress.city}
            onChange={(e) => fillFormInput(e, "city")}
          />
          <input
            type="text"
            placeholder="Enter state"
            name="state"
            value={newAddress.state}
            onChange={(e) => fillFormInput(e, "state")}
          />
          <input
            type="text"
            placeholder="Enter country"
            name="country"
            value={newAddress.country}
            onChange={(e) => fillFormInput(e, "country")}
          />
          <input
            type="text"
            placeholder="Enter postal code"
            name="postalCode"
            value={newAddress.postalCode}
            onChange={(e) => fillFormInput(e, "postalCode")}
          />
          <input
            type="text"
            placeholder="Enter mobile number"
            name="phoneNo"
            value={newAddress.phoneNo}
            onChange={(e) => fillFormInput(e, "phoneNo")}
          />
        </div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={handleSave}>
            Save
          </button>
          <button className="modal-btn" onClick={handleUpdate}>
            Update
          </button>
          <button className="modal-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
