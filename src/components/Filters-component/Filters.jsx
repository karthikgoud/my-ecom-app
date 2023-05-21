import RadioButton from "../Radio-button/RadioButton";
import "./Filters.css";
import { useData } from "../../context/DataContext";

const Filters = () => {
  const { dispatch, state } = useData();

  return (
    <div className="filter-container flex">
      <div className="filter-header">
        <div className="title">Filters</div>
        <button
          className="btn-clear"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Clear
        </button>
      </div>
      <div className="flex">
        <p className="title">Price</p>
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          defaultValue={0}
          onChange={(e) =>
            dispatch({ type: "RANGE_FILTER", payLoad: e.target.value })
          }
        />
        <input type="text" value={state.rangeValue} />
      </div>
      <div className="flex">
        <p className="title">Category</p>

        <label>
          <input
            type="checkbox"
            checked={state.menCategory}
            onChange={() => dispatch({ type: "FILTER_MEN" })}
          />
          Men Clothing
        </label>
        <label>
          <input
            type="checkbox"
            checked={state.womenCategory}
            onChange={() => dispatch({ type: "FILTER_WOMEN" })}
          />
          Women Clothing
        </label>
        <label>
          <input
            type="checkbox"
            checked={state.kidsCategory}
            onChange={() => dispatch({ type: "FILTER_KIDS" })}
          />
          Kids Clothing
        </label>
      </div>
      <div className="flex">
        <p className="title">Rating</p>
        <label>
          <input
            name="rating"
            type="radio"
            defaultValue="4"
            checked={state.starRating === "4"}
            onChange={() => dispatch({ type: "FILTER-RATING", payLoad: "4" })}
          />
          4 stars & above
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            defaultValue="3"
            checked={state.starRating === "3"}
            onChange={() => dispatch({ type: "FILTER-RATING", payLoad: "3" })}
          />
          3 stars & above
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            defaultValue="2"
            checked={state.starRating === "2"}
            onChange={() => dispatch({ type: "FILTER-RATING", payLoad: "2" })}
          />
          2 stars & above
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            defaultValue="1"
            checked={state.starRating === "1"}
            onChange={() => dispatch({ type: "FILTER-RATING", payLoad: "1" })}
          />
          1 stars & above
        </label>
      </div>
      <div className="flex">
        <p className="title"> Sort by</p>
        <label>
          <input
            name="sort"
            type="radio"
            defaultValue="highToLow"
            checked={state.sort === "highToLow"}
            onChange={() => dispatch({ type: "SORT-HIGH-TO-LOW" })}
          />
          Price- High-to-Low
        </label>
        <label>
          <input
            name="sort"
            type="radio"
            defaultValue="lowToHigh"
            checked={state.sort === "lowToHigh"}
            onChange={() => dispatch({ type: "SORT-LOW-TO-HIGH" })}
          />
          Price- Low-to-High
        </label>
      </div>
    </div>
  );
};

export default Filters;
