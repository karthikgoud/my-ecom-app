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

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductListing />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
