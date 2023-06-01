import React, { useState } from "react";
import "./AddressForm.css";
import { useData } from "../../../context/DataContext";
import Modal from "../../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const AddressForm = () => {
  const { productState, productDispatch } = useData();

  const [showModal, setShowModal] = useState(false);

  const [updateAddress, setUpdateAddress] = useState({});

  function handleAddNewAddress() {
    modalHandler();
    setUpdateAddress((prev) => ({
      ...prev,
      name: "",
      houseNo: "",
      colony: "",
      area: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      phoneNo: "",
    }));
  }

  function modalHandler() {
    setShowModal((prev) => !prev);
  }

  function handleDelete(address) {
    const filteredAdd = productState.addressList.filter(
      (item) => item.name !== address.name
    );
    productDispatch({ type: "DELETE_ADDRESS", payload: filteredAdd });
  }

  function handleEdit(address) {
    modalHandler();
    setUpdateAddress((prev) => ({ ...prev, ...address }));
  }

  return (
    <div className="address-form">
      <div>
        <h2>My Addresses</h2>
      </div>
      <ul>
        {productState?.addressList?.map((address) => (
          <li className="address-list-card">
            <div className="address-details">
              <div className="address-name">{address.name}</div>
              <div>
                House no : {address.houseNo} , {address.colony}, {address.area},{" "}
                {address.city},{address.state},{address.country}
                {address.postalCode}
              </div>
              <div>Phone: {address.phoneNo}</div>
            </div>
            <div className="address-btn-edit-cont">
              <button
                className="address-dele-btn"
                onClick={() => handleEdit(address)}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                className="address-dele-btn"
                onClick={() => handleDelete(address)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="btn-cont">
        <button className="add-btn" onClick={handleAddNewAddress}>
          + Add a new address
        </button>
      </div>
      <Modal
        addressFields={updateAddress}
        onClose={modalHandler}
        show={showModal}
      />
    </div>
  );
};

export default AddressForm;
