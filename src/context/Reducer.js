export const productReducer = (state, action) => {
  switch (action.type) {
    // only data
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "WISH_UPDATE":
      return { ...state, data: action.payload };
    case "TOGGLE_ADD_TO_CART_BTN":
      return { ...state, data: action.payload };

    // category
    case "GET_CATEGORY":
      return { ...state, categoryData: action.payload };

    // cart list
    case "SET_CART":
      return { ...state, cartData: action.payload };

    // wish list

    case "SET_WISH":
      return { ...state, wishListData: action.payload };

    case "SET_LOADER":
      return { ...state, loader: action.payload };

    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT-HIGH-TO-LOW":
      return { ...state, sort: action.payLoad };
    case "SORT-LOW-TO-HIGH":
      return { ...state, sort: action.payLoad };
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
