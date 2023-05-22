import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "./DataContext";
import { useCart } from "./CartContext";

export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const { wish, setWish } = useData();

  const { addToCart } = useCart();

  const { wishUpdate } = useData();

  const getWish = async () => {
    try {
      const keyToken = localStorage.getItem("token");

      const res = await fetch("/api/user/wishlist", {
        headers: {
          authorization: keyToken,
        },
      });
      const wishData = await res.json();
      // console.log("inintial wish", wishData.wishlist);
      setWish(wishData.wishlist);
    } catch (e) {
      console.error(e);
    }
  };

  const addWish = async (item) => {
    // console.log("wishitem", item);
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
      // console.log("from context", wishData.wishlist);
      setWish(wishData.wishlist);
    } catch (e) {
      console.error(e);
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
      setWish(wishData.wishlist);
    } catch (e) {
      console.log(e);
    }
  };

  const delWishMoveToCart = (item) => {
    deleteWish(item._id);
    addToCart(item);
  };

  useEffect(() => {
    getWish();
  }, []);

  return (
    <WishContext.Provider
      value={{ wish, setWish, addWish, deleteWish, delWishMoveToCart }}
    >
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => useContext(WishContext);
