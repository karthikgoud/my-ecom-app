import "./Header.css";
import { NavLink } from "react-router-dom";

import {
  faListUl,
  faHouse,
  faMagnifyingGlass,
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "../../context/DataContext";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useWish } from "../../context/WishContext";

const Header = () => {
  const { dispatch, state } = useData();

  const { isLoggedIn, setIsLoggedIn, setIsSignUp } = useAuth();

  const { cart } = useCart();
  const { wish } = useWish();

  function handleLogout() {
    setIsLoggedIn(false);
    setIsSignUp(false);
  }

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
      <div className="search-container">
        <FontAwesomeIcon
          className="search-icon"
          icon={faMagnifyingGlass}
          style={{ color: "#999a9a" }}
        />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) =>
            dispatch({ type: "SEARCH_BOX", payLoad: e.target.value })
          }
        />
        {/* <button
          onClick={() => dispatch({ type: "SEARCH_BOX", payload: searchText })}
        >
          Search
        </button> */}
      </div>
      <div className="nav-right-container">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button className="btn-login">Login</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <button className="btn-login" onClick={handleLogout}>
            Logout
          </button>
        )}
        <NavLink to="/product" onClick={() => dispatch({ type: "RESET" })}>
          <FontAwesomeIcon
            icon={faListUl}
            size="xl"
            style={{ color: "#999a9a" }}
          />
        </NavLink>
        <div className="wishlist-box">
          <span className="red-circle wish-counter">{wish?.length ?? 0}</span>
          <NavLink to="/wishlist">
            <FontAwesomeIcon
              icon={faHeartRegular}
              size="xl"
              style={{ color: "#999a9a" }}
            />
          </NavLink>
        </div>
        <div className="wishlist-box">
          <span className="red-circle cart-counter">{cart?.length ?? 0}</span>
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
