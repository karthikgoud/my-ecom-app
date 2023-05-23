import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "./DataContext";
import { ToastHandler } from "../components/Toast/Toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, setCart, setWish, toggleAddToCartBtn } = useData();

  const getCart = async () => {
    try {
      const keyToken = localStorage.getItem("token");
      // console.log("keyToken", keyToken);

      const res = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          authorization: keyToken,
        },
      });

      const cartRes = await res.json();
      setCart(cartRes.cart); // sets cart to empty array
      // console.log("initail cart", cartRes);
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
      setCart(addCart.cart); // adds product to cart array
      // console.log("added cart", addCart.cart);
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
      setCart(updatedCart.cart);
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
      setWish(wishData.wishlist);
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
    setCart(newCart.cart);
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
    setCart(newCart.cart);
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
        cart,
        setCart,
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
