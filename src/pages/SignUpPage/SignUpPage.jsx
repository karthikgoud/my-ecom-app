import {
  faAngleRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignUpPage.css";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import Header from "../../components/Header/Header";

const SignUpPage = () => {
  const { isLoggedIn, setIsLoggedIn, getSignUp, isSignUp, setIsSignUp } =
    useAuth();

  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();
  const location = useLocation();

  function handleSignUp() {
    const { firstName, lastName, email, password } = signUpForm;

    if (firstName && lastName && email && password !== "") {
      getSignUp(email, password, firstName, lastName);
      setIsLoggedIn(!isLoggedIn);
      setIsSignUp(!isSignUp);
      navigate(location?.state?.from?.pathname);
    }
  }

  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setSignUpForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  function handlePasswordType() {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <div>
      <Header />
      <div className="signUp-cont">
        <div className="signUp-card">
          <h2>SignUp</h2>
          <div className="input-email">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="adarsh"
              value={signUpForm.firstName}
              onChange={(e) => fillFormValue(e, "firstName")}
            />
          </div>
          <div className="input-email">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="balika"
              value={signUpForm.lastName}
              onChange={(e) => fillFormValue(e, "lastName")}
            />
          </div>
          <div className="input-email">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              placeholder="testSignUp@gmail.com"
              value={signUpForm.email}
              onChange={(e) => fillFormValue(e, "email")}
            />
          </div>
          <div className="input-password">
            <label htmlFor="password">Password</label>
            <input
              type={passwordType}
              id="password"
              placeholder="*********"
              value={signUpForm.password}
              onChange={(e) => fillFormValue(e, "password")}
            />
            <div className="show-password">
              {passwordType === "password" && (
                <FontAwesomeIcon onClick={handlePasswordType} icon={faEye} />
              )}
              {passwordType === "text" && (
                <FontAwesomeIcon
                  onClick={handlePasswordType}
                  icon={faEyeSlash}
                />
              )}
            </div>
          </div>
          <div className="input-password-confirm">
            <label htmlFor="password">Confirm Password</label>
            <input
              type={passwordType}
              id="password"
              placeholder="*********"
              value={signUpForm.confirmPassword}
              onChange={(e) => fillFormValue(e, "confirmPassword")}
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
