import { createContext, useContext, useEffect } from "react";
import { useData } from "./DataContext";
import { useCart } from "./CartContext";
import { ToastHandler } from "../components/Toast/Toast";
import { useAuth } from "./AuthContext";

export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const { wish, setWish, productDispatch, productState } = useData();

  const { addToCart } = useCart();

  const { isLoggedIn, isSignUp } = useAuth();

  function wishUpdate(id) {
    if (!isLoggedIn && !isSignUp) {
      return null;
    }
    const wishUpdate = [...productState.data].map((item) =>
      item._id === id ? { ...item, isWished: !item.isWished } : item
    );
    productDispatch({ type: "WISH_UPDATE", payload: wishUpdate });
  }

  const getWish = async () => {
    try {
      const keyToken = localStorage.getItem("token");

      const res = await fetch("/api/user/wishlist", {
        headers: {
          authorization: keyToken,
        },
      });
      const wishData = await res.json();
      productDispatch({ type: "SET_WISH", payload: wishData.wishlist });
    } catch (e) {
      console.error(e);
    }
  };

  const addWish = async (item) => {
    if (!isLoggedIn && !isSignUp) {
      ToastHandler("warn", "Login to access wish cart");
    } else {
      try {
        const keyToken = localStorage.getItem("token");

        const data = {
          product: item,
        };

        const res = await fetch("/api/user/wishlist", {
          method: "POST",
          headers: {
            authorization: keyToken,
          },
          body: JSON.stringify(data),
        });
        const wishData = await res.json();
        productDispatch({ type: "SET_WISH", payload: wishData.wishlist });
        ToastHandler("success", "Added to WishList");
      } catch (e) {
        console.error(e);
      }
    }
  };

  const deleteWish = async (id) => {
    try {
      const keyToken = localStorage.getItem("token");
      const res = await fetch(`/api/user/wishlist/${id}`, {
        method: "DELETE",
        headers: {
          authorization: keyToken,
        },
      });
      const wishData = await res.json();
      wishUpdate(id);
      productDispatch({ type: "SET_WISH", payload: wishData.wishlist });
      ToastHandler("warn", "Removed from WishList");
    } catch (e) {
      console.log(e);
    }
  };

  const delWishMoveToCart = (item) => {
    deleteWish(item._id);
    addToCart(item);
    wishUpdate(item._id);
  };

  useEffect(() => {
    getWish();
  }, []);

  return (
    <WishContext.Provider
      value={{
        wish,
        setWish,
        wishUpdate,
        addWish,
        deleteWish,
        delWishMoveToCart,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => useContext(WishContext);
