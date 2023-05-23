import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";
import "./SignUpPage.css";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router";

const SignUpPage = () => {
  const { isLoggedIn, setIsLoggedIn, getSignUp, isSignUp, setIsSignUp } =
    useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  function handleSignUp() {
    getSignUp();
    setIsLoggedIn(!isLoggedIn);
    setIsSignUp(!isSignUp);
    navigate(location?.state?.from?.pathname);
  }
  return (
    <div>
      <Header />
      <div className="signUp-cont">
        <div className="signUp-card">
          <h2>SignUp</h2>
          <div className="input-email">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="" id="firstName" placeholder="adarsh" />
          </div>
          <div className="input-email">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="" id="lastName" placeholder="balika" />
          </div>
          <div className="input-email">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              name=""
              id="email"
              placeholder="testSignUp@gmail.com"
            />
          </div>
          <div className="input-password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="*********"
            />
          </div>
          <div className="forgot-cont">
            <div>
              <label htmlFor="">
                <input type="checkbox" name="" id="" /> I accept all Terms and
                Conditions
              </label>
            </div>
          </div>
          <button className="signUp-btn" onClick={handleSignUp}>
            Create New Account
          </button>
          <a className="create-new-acc" href="/login">
            Already have account
            <FontAwesomeIcon
              icon={faAngleRight}
              size="xl"
              style={{ color: "black" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
