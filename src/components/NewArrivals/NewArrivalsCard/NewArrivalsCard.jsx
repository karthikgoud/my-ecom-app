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
          <p className="sub-title">Summer Collection</p>
          <p className="detail-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            voluptatum nihil nisi veniam repellendus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsCard;
