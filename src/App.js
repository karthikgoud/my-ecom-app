import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import WishList from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";
import ProductListing from "./pages/ProductListing/ProductListing";
import Mockman from "mockman-js";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import RequiresAuth from "./Auth/RequiresAuth";
import { useAuth } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./pages/CheckOut/CheckOut";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserProfile from "./pages/UserProfilePage/UserProfile";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  const { isLoggedIn, isSignUp } = useAuth();

  return (
    <div className="app-container">
      <ToastContainer
        position="top-center"
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
