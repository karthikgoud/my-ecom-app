import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishProvider } from "./context/WishContext";

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <AuthProvider>
          <CartProvider>
            <WishProvider>
              <App />
            </WishProvider>
          </CartProvider>
        </AuthProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
