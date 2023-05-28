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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./components/UserProfile/UserProfile";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  const { isLoggedIn, isSignUp } = useAuth();

  return (
    <div className="app-container">
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductListing />} />
        <Route path="/userprofile" element={<UserProfile />} />
        {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
        {isLoggedIn && <Route path="/login" element={<ProductListing />} />}
        {!isSignUp && <Route path="/signup" element={<SignUpPage />} />}
        {isSignUp && <Route path="/signup" element={<ProductListing />} />}
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />

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
