import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import WishList from "./components/WishList/WishList";
import Cart from "./components/Cart/Cart";
import ProductListing from "./components/ProductListing/ProductListing";
import Mockman from "mockman-js";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import RequiresAuth from "./Auth/RequiresAuth";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductListing />} />
        {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
        {isLoggedIn && <Route path="/login" element={<Cart />} />}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishList />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
