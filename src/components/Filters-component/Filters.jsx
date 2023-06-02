import "./Filters.css";
import { useData } from "../../context/DataContext";

const Filters = () => {
  const { dispatch, state } = useData();

  function handleCategoryChange(e, option) {
    let check = e.target.checked;
    dispatch({
      type: "CATEGORY",
      payload: {
        option,
        check,
      },
    });
  }

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

      {/* range filter */}

      <div className="flex">
        <p className="title">Filter By Price</p>
        <label>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={state.rangeValue}
            onChange={(e) =>
              dispatch({ type: "RANGE_FILTER", payload: e.target.value })
            }
          />
          {state.rangeValue > 0 && <div>{state.rangeValue}</div>}
        </label>
      </div>

      {/* category filter */}

      <div className="flex">
        <p className="title">Category</p>
        <label>
          <input
            type="checkbox"
            checked={state.category.includes("Men")}
            onChange={(e) => handleCategoryChange(e, "Men")}
          />
          Men Clothing
        </label>
        <label>
          <input
            type="checkbox"
            checked={state.category.includes("Women")}
            onChange={(e) => handleCategoryChange(e, "Women")}
          />
          Women Clothing
        </label>
        <label>
          <input
            type="checkbox"
            checked={state.category.includes("Kids")}
            onChange={(e) => handleCategoryChange(e, "Kids")}
          />
          Kids Clothing
        </label>
      </div>

      {/* rating filter */}

      <div className="flex">
        <p className="title">Rating</p>
        <label>
          <input
            name="rating"
            type="radio"
            defaultValue="4"
            checked={state.starRating === "4"}
            onChange={() => dispatch({ type: "FILTER-RATING", payload: "4" })}
          />
          4 stars & above
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            defaultValue="3"
            checked={state.starRating === "3"}
            onChange={() => dispatch({ type: "FILTER-RATING", payload: "3" })}
          />
          3 stars & above
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            defaultValue="2"
            checked={state.starRating === "2"}
            onChange={() => dispatch({ type: "FILTER-RATING", payload: "2" })}
          />
          2 stars & above
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            defaultValue="1"
            checked={state.starRating === "1"}
            onChange={() => dispatch({ type: "FILTER-RATING", payload: "1" })}
          />
          1 stars & above
        </label>
      </div>

      {/* sort filter */}

      <div className="flex">
        <p className="title"> Sort by</p>
        <label>
          <input
            name="sort"
            type="radio"
            defaultValue="highToLow"
            checked={state.sort === "highToLow"}
            onChange={() =>
              dispatch({ type: "SORT-HIGH-TO-LOW", payload: "highToLow" })
            }
          />
          Price- High-to-Low
        </label>
        <label>
          <input
            name="sort"
            type="radio"
            defaultValue="lowToHigh"
            checked={state.sort === "lowToHigh"}
            onChange={() =>
              dispatch({ type: "SORT-LOW-TO-HIGH", payload: "lowToHigh" })
            }
          />
          Price- Low-to-High
        </label>
      </div>
    </div>
  );
};

export default Filters;
