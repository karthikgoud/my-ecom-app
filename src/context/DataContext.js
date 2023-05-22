import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const DataContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       console.log(action);
//     case "DECREMENT":
//       return [...state, action.payLoad];
//     default:
//       return state;
//   }
// };

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
    case "RANGE_FILTER":
      return { ...state, rangeValue: action.payLoad };
    case "SEARCH_BOX":
      console.log(action);
      return { ...state, searchValue: action.payLoad };
    case "RESET":
      return {
        ...state,
        sort: null,
        starRating: null,
        rangeValue: null,
        menCategory: false,
        womenCategory: false,
        kidsCategory: false,
        searchValue: null,
      };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    sort: null,
    starRating: null,
    rangeValue: null,
    menCategory: false,
    womenCategory: false,
    kidsCategory: false,
    searchValue: null,
  });
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [loader, setLoader] = useState(true);

  // const [cartState, cartDispatch] = useReducer(cartReducer, []);

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
      setLoader(false);
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

  function toggleAddToCartBtn(id) {
    console.log("id", id);
    const carted = [...data].map((item) =>
      item._id === id ? { ...item, isCarted: !item.isCarted } : item
    );
    setData(carted);
  }

  // sorted data : radio

  const sortedData =
    state.sort !== null
      ? data.toSorted((a, b) =>
          state.sort === "highToLow" ? b.price - a.price : a.price - b.price
        )
      : data;

  //search box

  const filterText =
    state.searchValue !== null
      ? sortedData.filter((item) =>
          item.title.toLowerCase().includes(state.searchValue.toLowerCase())
        )
      : sortedData;

  // filter range

  const rangeFilter =
    state.rangeValue !== null
      ? filterText.filter(
          (item) => Number(item.price) <= Number(state.rangeValue)
        )
      : filterText;

  // rating filter data : radio

  const filterRating =
    state.starRating !== null
      ? rangeFilter.filter((item) => item.rating >= state.starRating)
      : rangeFilter;

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
      value={{
        filterKids,
        category,
        state,
        dispatch,
        wishUpdate,
        toggleAddToCartBtn,
        cart,
        setCart,
        wish,
        setWish,
        loader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
