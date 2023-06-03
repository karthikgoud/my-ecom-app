export const productReducer = (state, action) => {
  switch (action.type) {
    // only data
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "WISH_UPDATE":
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

    // address

    case "ADD_NEW_ADDRESS":
      return { ...state, addressList: [...state.addressList, action.payload] };

    case "DELETE_ADDRESS":
      return { ...state, addressList: [...action.payload] };

    case "SET_DELEVERY_ADDRESS":
      return { ...state, orderAddress: { ...action.payload } };

    case "UPDATE_ADDRESS":
      const updatedAddress = state.addressList.map((eachAddress) =>
        eachAddress.idAddress === action.payload.idAddress
          ? action.payload
          : eachAddress
      );
      return { ...state, addressList: [...updatedAddress] };

    case "COUPON_DISCOUNT":
      return { ...state, couponDiscount: action.payload };

    case "RESET_COUPON":
      return { ...state, couponDiscount: action.payload };

    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT-HIGH-TO-LOW":
      return { ...state, sort: action.payload };
    case "SORT-LOW-TO-HIGH":
      return { ...state, sort: action.payload };
    case "CATEGORY":
      return {
        ...state,
        category: action.payload.check
          ? [...state.category, action.payload.option]
          : state.category.length > 0
          ? state.category.filter(
              (categoryValue) => categoryValue !== action.payload.option
            )
          : [],
      };
    case "CATEGORY_NAVIGATE":
      return { ...state, category: [action.payload] };

    case "FILTER-RATING":
      return { ...state, starRating: action.payload };
    case "RANGE_FILTER":
      return { ...state, rangeValue: action.payload };
    case "SEARCH_BOX":
      return { ...state, searchValue: action.payload };
    case "RESET":
      return {
        ...state,
        sort: null,
        starRating: null,
        rangeValue: 0,
        category: [],
        searchValue: "",
      };
    default:
      return state;
  }
};
