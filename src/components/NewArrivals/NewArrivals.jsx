import NewArrivalsCard from "./NewArrivalsCard/NewArrivalsCard";
import "./NewArrivals.css";

const NewArrivals = () => {
  return (
    <div className="new-arrival-container">
      <NewArrivalsCard />
      <NewArrivalsCard />
    </div>
  );
};

export default NewArrivals;
