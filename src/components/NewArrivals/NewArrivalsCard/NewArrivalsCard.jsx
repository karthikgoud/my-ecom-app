import { NavLink } from "react-router-dom";
import "./NewArrivalsCard.css";

const NewArrivalsCard = () => {
  return (
    <div className="new-arrival-card-container">
      <div className="new-arrival-image">
        <img src="images/new-arrival-img-2.jpg" alt="random img" />
      </div>
      <div className="card-details">
        <p className="title">NEW ARRIVALS</p>
        <div>
          <p className="sub-title">Spring Collection</p>
          <p className="detail-text">
            Designers are giving us new fashion arrivals to look forward to all
            year long, with goodies landing in stores and online every
            week.Don't miss our New Arrivals:
          </p>
          <NavLink to="/newarraival" className="view-all">
            <h4>View All</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsCard;
