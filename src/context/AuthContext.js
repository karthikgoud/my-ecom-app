import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

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

  const getSignUp = async () => {
    try {
      const cred = {
        email: "testSignUp@gmail.com",
        password: "adarshbalika",
        firstName: "adarsh",
        lastName: "balika",
      };
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const { encodedToken } = await res.json();

      console.log("signUp", encodedToken);

      localStorage.setItem("token", encodedToken);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        getLogin,
        getSignUp,
        isSignUp,
        setIsSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
