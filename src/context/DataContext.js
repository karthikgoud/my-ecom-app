import { faL } from "@fortawesome/free-solid-svg-icons";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SORT-HIGH-TO-LOW":
      return { ...state, sort: "highToLow" };
    case "SORT-LOW-TO-HIGH":
      return { ...state, sort: "lowToHigh" };
    case "FILTER_MEN":
      return { ...state, menCategory: !state.menCategory };
    case "FILTER_WOMEN":
      return { ...state, womenCategory: !state.womenCategory };
    case "FILTER_KIDS":
      return { ...state, kidsCategory: !state.kidsCategory };
    case "FILTER-RATING":
      return { ...state, starRating: action.payLoad };
    case "RESET":
      return {
        ...state,
        sort: null,
        starRating: null,
        range: null,
        menCategory: false,
        womenCategory: false,
        kidsCategory: false,
      };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    sort: null,
    starRating: null,
    range: null,
    menCategory: false,
    womenCategory: false,
    kidsCategory: false,
  });
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      const myProducts = await res.json();
      setData(myProducts.products);
    } catch (e) {
      console.error(e);
    }
  };

  const getCategory = async () => {
    try {
      const res = await fetch("/api/categories");
      const myCategory = await res.json();
      setCategory(myCategory.categories);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  // iswish

  function wishUpdate(id) {
    const wishUpdate = [...data].map((item) =>
      item._id === id ? { ...item, isWished: !item.isWished } : item
    );
    setData(wishUpdate);
  }

  // sorted data : radio

  const sortedData =
    state.sort !== null
      ? data.toSorted((a, b) =>
          state.sort === "highToLow" ? b.price - a.price : a.price - b.price
        )
      : data;

  // rating filter data : radio

  const filterRating =
    state.starRating !== null
      ? sortedData.filter((item) => item.rating >= state.starRating)
      : sortedData;

  // Filter data : checkbox

  const filterMen = state.menCategory
    ? filterRating.filter((item) => item.categoryName === "Men")
    : filterRating;

  const filterWomen = state.womenCategory
    ? filterMen.filter((item) => item.categoryName === "Women")
    : filterMen;

  const filterKids = state.kidsCategory
    ? filterWomen.filter((item) => item.categoryName === "Kids")
    : filterWomen;

  return (
    <DataContext.Provider
      value={{ filterKids, category, state, dispatch, wishUpdate }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
