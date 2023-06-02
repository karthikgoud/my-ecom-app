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
  category: [],
  searchValue: null,
};

const dummyAddress = {
  idAddress: 1,
  name: "Adarsh Balika",
  houseNo: "45",
  colony: "Rainbow colony",
  area: "3rd Main, Bogadi",
  city: "Mysore",
  state: "Karnataka",
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
    orderAddress: {},
    couponDiscount: null,
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
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  const getSortedProducts = (products, sortValue) => {
    const sortedProducts = products.toSorted((a, b) =>
      sortValue === "highToLow"
        ? b.price - a.price
        : sortValue === "lowToHigh"
        ? a.price - b.price
        : products
    );
    return sortedProducts;
  };

  const getProductsByRange = (products, rangeValue) => {
    const sortedProducts = products.filter((product) =>
      rangeValue
        ? Number(product.disCountedPrice) <= Number(rangeValue)
        : product
    );
    return sortedProducts;
  };

  const getProductsByRating = (products, ratingValue) => {
    const sortedProducts = products.filter((product) =>
      ratingValue ? product.rating >= ratingValue : product
    );
    return sortedProducts;
  };

  const getProductsByCategory = (products, categoryArr) => {
    const sortedProducts = products.filter((product) =>
      categoryArr.length > 0
        ? categoryArr.includes(product.categoryName)
        : product
    );

    return sortedProducts;
  };

  const sortedProducts = getSortedProducts(productState.data, state.sort);

  const filterRatingProducts = getProductsByRating(
    sortedProducts,
    state.starRating
  );
  const filterRangeProducts = getProductsByRange(
    filterRatingProducts,
    state.rangeValue
  );
  const filteredProducts = getProductsByCategory(
    filterRangeProducts,
    state.category
  );

  console.log("filter", state);

  // const transformedProducts = () => {
  //   let sortedProducts = productState.data;

  //   if (state.sort) {
  //     sortedProducts = sortedProducts.toSorted((a, b) =>
  //       state.sort === "highToLow" ? b.price - a.price : a.price - b.price
  //     );
  //   }

  //   if (state.searchValue) {
  //     sortedProducts = sortedProducts.filter((item) =>
  //       item.title.toLowerCase().includes(state.searchValue.toLowerCase())
  //     );
  //   }

  //   if (state.rangeValue) {
  //     sortedProducts = sortedProducts.filter(
  //       (item) => Number(item.price) <= Number(state.rangeValue)
  //     );
  //   }

  //   if (state.starRating) {
  //     sortedProducts = sortedProducts.filter(
  //       (item) => item.rating >= state.starRating
  //     );
  //   }

  //   if (state.menCategory) {
  //     sortedProducts = sortedProducts.filter(
  //       (item) => item.categoryName === "Men"
  //     );
  //   }
  //   if (state.womenCategory) {
  //     sortedProducts = sortedProducts.filter(
  //       (item) => item.categoryName === "Women"
  //     );
  //   }
  //   if (state.kidsCategory) {
  //     sortedProducts = sortedProducts.filter(
  //       (item) => item.categoryName === "Kids"
  //     );
  //   }

  //   return sortedProducts;
  // };

  return (
    <DataContext.Provider
      value={{
        productState,
        productDispatch,
        state,
        dispatch,
        filteredProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
