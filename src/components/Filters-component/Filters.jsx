import RadioButton from "../Radio-button/RadioButton";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="filter-container flex">
      <div className="filter-header">
        <div className="title">Filters</div>
        <button className="btn-clear">Clear</button>
      </div>
      <div className="flex">
        <p className="title">Price</p>
        <input
          type="range"
          min="300"
          max="5000"
          step="100"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="flex">
        <p className="title">Category</p>

        <label>
          <input type="checkbox" />
          Men Clothing
        </label>
        <label>
          <input type="checkbox" />
          Men Clothing
        </label>
      </div>
      <div className="flex">
        <p className="title">Rating</p>
        {/* <label>
          <input type="radio" />4 stars & above
        </label> */}
        <RadioButton text="4 stars and above" />
        <RadioButton text="3 stars and above" />
        <RadioButton text="2 stars and above" />
        <RadioButton text="1 stars and above" />
      </div>
      <div className="flex">
        <p className="title"> Sort by</p>
        <label>
          <input type="radio" />
          Price- High-to-Low
        </label>
        <label>
          <input type="radio" />
          Price- Low-to-High
        </label>
      </div>
    </div>
  );
};

export default Filters;
