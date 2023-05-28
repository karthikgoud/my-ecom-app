import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { filterReducer, productReducer } from "./Reducer";

export const DataContext = createContext();

const initialStateFilter = {
  sort: null,
  starRating: null,
  rangeValue: null,
  menCategory: false,
  womenCategory: false,
  kidsCategory: false,
  searchValue: null,
};

const dummyAddress = {
  name: "Vishal",
  houseNo: "45",
  colony: "rainbow colony",
  area: "hebbal",
  city: "bangalore",
  state: "karnataka",
  country: "INDIA",
  postalCode: "560056",
  phoneNo: "919923254239",
};

export const DataProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    data: [],
    cartData: [],
    wishListData: [],
    categoryData: [],
    addressList: [dummyAddress],
    loader: true,
  });
  const [state, dispatch] = useReducer(filterReducer, initialStateFilter);

  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      const myProducts = await res.json();
      productDispatch({ type: "GET_DATA", payload: myProducts.products });
    } catch (e) {
      console.error(e);
    }
  };

  const getCategory = async () => {
    try {
      const res = await fetch("/api/categories");
      const myCategory = await res.json();
      productDispatch({ type: "GET_CATEGORY", payload: myCategory.categories });
      productDispatch({ type: "SET_LOADER", payload: false });

      // setLoader(false);
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
    const wishUpdate = [...productState.data].map((item) =>
      item._id === id ? { ...item, isWished: !item.isWished } : item
    );
    productDispatch({ type: "WISH_UPDATE", payload: wishUpdate });
  }

  function toggleAddToCartBtn(id) {
    console.log("id", id);
    const carted = [...productState.data].map((item) =>
      item._id === id ? { ...item, isCarted: !item.isCarted } : item
    );
    productDispatch({ type: "TOGGLE_ADD_TO_CART_BTN", payload: carted });
  }

  const transformedProducts = () => {
    let sortedProducts = productState.data;

    if (state.sort) {
      sortedProducts = sortedProducts.toSorted((a, b) =>
        state.sort === "highToLow" ? b.price - a.price : a.price - b.price
      );
    }

    if (state.searchValue) {
      sortedProducts = sortedProducts.filter((item) =>
        item.title.toLowerCase().includes(state.searchValue.toLowerCase())
      );
    }

    if (state.rangeValue) {
      sortedProducts = sortedProducts.filter(
        (item) => Number(item.price) <= Number(state.rangeValue)
      );
    }

    if (state.starRating) {
      sortedProducts = sortedProducts.filter(
        (item) => item.rating >= state.starRating
      );
    }

    if (state.menCategory) {
      sortedProducts = sortedProducts.filter(
        (item) => item.categoryName === "Men"
      );
    }
    if (state.womenCategory) {
      sortedProducts = sortedProducts.filter(
        (item) => item.categoryName === "Women"
      );
    }
    if (state.kidsCategory) {
      sortedProducts = sortedProducts.filter(
        (item) => item.categoryName === "Kids"
      );
    }

    return sortedProducts;
  };

  return (
    <DataContext.Provider
      value={{
        productState,
        productDispatch,
        transformedProducts,
        state,
        dispatch,
        wishUpdate,
        toggleAddToCartBtn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
