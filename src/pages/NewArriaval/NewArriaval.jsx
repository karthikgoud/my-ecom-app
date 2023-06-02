import { NavLink } from "react-router-dom";
import "./NewArriaval.css";
const NewArriaval = () => {
  return (
    <div className="new-arraival-cont">
      <div>
        <div>Coming Sooooon........</div>
      </div>
      <div>
        <NavLink to="/" className="back-to-main">
          <p> ⬅️ Back to main</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NewArriaval;
