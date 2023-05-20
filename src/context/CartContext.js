import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getLogin = async () => {
    try {
      const cred = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const { encodedToken } = await res.json();

      // console.log("encodedToken", encodedToken);

      localStorage.setItem("token", encodedToken);
    } catch (e) {
      console.log(e);
    }
  };

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
      // console.log("initail cart", cartRes.cart);
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
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLogin();
    getCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, getLogin }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
