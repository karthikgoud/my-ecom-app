import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "./DataContext";
import { ToastHandler } from "../components/Toast/Toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { productDispatch, setWish, toggleAddToCartBtn } = useData();

  const getCart = async () => {
    try {
      const keyToken = localStorage.getItem("token");

      const res = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          authorization: keyToken,
        },
      });

      const cartRes = await res.json();
      productDispatch({ type: "SET_CART", payload: cartRes.cart });
    } catch (e) {
      console.log(e);
    }
  };

  const addToCart = async (item) => {
    try {
      const keyToken = localStorage.getItem("token");

      const data = {
        product: item,
      };

      const res = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: keyToken,
        },
        body: JSON.stringify(data),
      });

      const addCart = await res.json();
      productDispatch({ type: "SET_CART", payload: addCart.cart });

      toggleAddToCartBtn(item._id);
      ToastHandler("success", "Added to Cart");
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromCart = async (item) => {
    try {
      const keyToken = localStorage.getItem("token");

      const res = await fetch(`/api/user/cart/${item._id}`, {
        method: "DELETE",
        headers: {
          authorization: keyToken,
        },
      });

      const updatedCart = await res.json();
      productDispatch({ type: "SET_CART", payload: updatedCart.cart });
      toggleAddToCartBtn(item._id);
      ToastHandler("warn", "Removed from Cart");
    } catch (e) {
      console.log(e);
    }
  };

  const addWishFromCart = async (item) => {
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
      productDispatch({ type: "SET_WISH", payload: wishData.wishlist });
      // setWish(wishData.wishlist);
      ToastHandler("success", "Added to WishList");
    } catch (e) {
      console.error(e);
    }
  };

  const addOne = async (item) => {
    const keyToken = localStorage.getItem("token");

    const bodySend = {
      action: {
        type: "increment",
      },
    };

    const res = await fetch(`/api/user/cart/${item._id}`, {
      method: "POST",
      headers: {
        authorization: keyToken,
      },
      body: JSON.stringify(bodySend),
    });

    const newCart = await res.json();
    productDispatch({ type: "SET_CART", payload: newCart.cart });
    // setCart(newCart.cart);
  };

  const removeOne = async (item) => {
    const keyToken = localStorage.getItem("token");

    const bodySend = {
      action: {
        type: "decrement",
      },
    };

    const res = await fetch(`/api/user/cart/${item._id}`, {
      method: "POST",
      headers: {
        authorization: keyToken,
      },
      body: JSON.stringify(bodySend),
    });

    const newCart = await res.json();
    if (item.qty === 1) {
      removeFromCart(item);
    } else {
      productDispatch({ type: "SET_CART", payload: newCart.cart });
    }
  };

  const delCartMoveToWish = (item) => {
    addWishFromCart(item);
    removeFromCart(item);
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        delCartMoveToWish,
        removeOne,
        addOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
