import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const getLogin = async (email, password) => {
    try {
      const cred = {
        email: email,
        password: password,
      };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const { foundUser, encodedToken } = await res.json();

      localStorage.setItem("token", encodedToken);
      setToken(encodedToken);
      localStorage.setItem("user", foundUser);
      setUser(foundUser);

      // localStorage.setItem("token", encodedToken);
    } catch (e) {
      console.log(e);
    }
  };

  const getSignUp = async (email, password, firstName, lastName) => {
    try {
      const cred = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const { createdUser, encodedToken } = await res.json();

      localStorage.setItem("token", encodedToken);
      setToken(encodedToken);
      localStorage.setItem("user", createdUser);
      setUser(createdUser);

      // localStorage.setItem("token", encodedToken);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        getLogin,
        getSignUp,
        isLoggedIn,
        setIsLoggedIn,
        isSignUp,
        setIsSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
