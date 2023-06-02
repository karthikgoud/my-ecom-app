import "./Header.css";
import { NavLink } from "react-router-dom";

import {
  faListUl,
  faMagnifyingGlass,
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "../../context/DataContext";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router";

const Header = () => {
  const {
    state,
    dispatch,
    productState: { cartData, wishListData },
  } = useData();

  const { isLoggedIn, setIsLoggedIn, setIsSignUp } = useAuth();

  function handleLogout() {
    setIsLoggedIn(false);
    setIsSignUp(false);
  }

  const productListPath = useLocation();

  return (
    <nav className="nav-container">
      <NavLink
        to="/"
        className="logo-container"
        onClick={() => dispatch({ type: "RESET" })}
      >
        <img
          className="logo"
          src="/images/allinone-logo-crop.jpeg"
          alt="logo"
        />
        <div className="title">All-In-One-Shop</div>
      </NavLink>
      {productListPath.pathname === "/product" && (
        <div className="search-container">
          <FontAwesomeIcon
            className="search-icon"
            icon={faMagnifyingGlass}
            style={{ color: "#999a9a" }}
          />
          <input
            type="text"
            placeholder="Search..."
            value={state.searchValue}
            onChange={(e) =>
              dispatch({ type: "SEARCH_BOX", payload: e.target.value })
            }
          />
        </div>
      )}
      <div className="nav-right-container">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button className="btn-login">Login</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/">
            <button className="btn-login" onClick={handleLogout}>
              Logout
            </button>
          </NavLink>
        )}
        <NavLink to="/product" onClick={() => dispatch({ type: "RESET" })}>
          <FontAwesomeIcon
            icon={faListUl}
            size="xl"
            style={{ color: "#999a9a" }}
          />
        </NavLink>
        <div className="wishlist-box">
          {wishListData?.length > 0 && (
            <span className="red-circle wish-counter">
              {wishListData?.length ?? 0}
            </span>
          )}
          <NavLink to="/wishlist">
            <FontAwesomeIcon
              icon={faHeartRegular}
              size="xl"
              style={{ color: "#999a9a" }}
            />
          </NavLink>
        </div>
        <div className="wishlist-box">
          {cartData?.length > 0 && (
            <span className="red-circle cart-counter">
              {cartData?.length ?? 0}
            </span>
          )}
          <NavLink className="cart-container" to="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="xl"
              style={{ color: "#999a9a" }}
            />
          </NavLink>
        </div>
        {isLoggedIn && (
          <NavLink to="/userprofile">
            <FontAwesomeIcon
              icon={faCircleUser}
              size="xl"
              style={{ color: "#999a9a" }}
            />
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
