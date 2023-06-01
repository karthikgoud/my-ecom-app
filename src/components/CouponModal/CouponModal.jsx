import { useData } from "../../context/DataContext";
import "./CouponModal.css";
const CouponModal = ({ show, onClose }) => {
  const { productDispatch } = useData();

  if (!show) {
    return;
  }
  return (
    <div className="coupon-modal">
      <div className="coupon-modal-content">
        <div>DISCOUNT COUPONS</div>
        <div className="coupon-modal-body">
          <label>
            <input
              name="coupon"
              type="radio"
              onChange={() =>
                productDispatch({ type: "COUPON_DISCOUNT", payload: 0.5 })
              }
            />
            50% - Big Billion Day Discount
          </label>
          <label>
            <input
              name="coupon"
              type="radio"
              onChange={() =>
                productDispatch({ type: "COUPON_DISCOUNT", payload: 0.9 })
              }
            />
            10% - HDFC Credit Discount
          </label>
        </div>
        <div className="coupon-modal-footer">
          {" "}
          <button className="coupon-modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;
