import { createContext, useContext, useEffect } from "react";
import { useData } from "./DataContext";
import { ToastHandler } from "../components/Toast/Toast";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { productDispatch, productState } = useData();

  const { isLoggedIn, isSignUp } = useAuth();

  function toggleAddToCartBtn(id) {
    const carted = [...productState.data].map((item) =>
      item._id === id ? { ...item, isCarted: !item.isCarted } : item
    );
    productDispatch({ type: "WISH_UPDATE", payload: carted });
  }

  function wishUpdate(id) {
    if (!isLoggedIn && !isSignUp) {
      return null;
    }
    const wishUpdate = [...productState.data].map((item) =>
      item._id === id ? { ...item, isWished: !item.isWished } : item
    );
    productDispatch({ type: "WISH_UPDATE", payload: wishUpdate });
  }

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
    if (!isLoggedIn && !isSignUp) {
      ToastHandler("error", "Login to access cart");
    } else {
      const keyToken = localStorage.getItem("token");

      const res = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          authorization: keyToken,
        },
      });

      const cartRes = await res.json();

      const isInCart = cartRes.cart.some((product) => product._id === item._id);

      if (isInCart) {
        addOne(item);
        ToastHandler("success", "Added to Cart");
      } else {
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
      }
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
    const keyToken = localStorage.getItem("token");

    const res = await fetch("/api/user/wishlist", {
      headers: {
        authorization: keyToken,
      },
    });
    const wishData = await res.json();

    const isInWish = wishData.wishlist.some(
      (product) => product._id === item._id
    );

    if (isInWish) {
      ToastHandler("info", "Alread in WishList");
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
        wishUpdate(item._id);
        ToastHandler("success", "Added to WishList");
      } catch (e) {
        console.error(e);
      }
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
        toggleAddToCartBtn,
        wishUpdate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
