import React from "react";
import "./LoginPage.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="login-cont">
        <div className="login-card">
          <h2>Login</h2>
          <div className="input-email">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              name=""
              id="email"
              placeholder="adarshbalika@gmail.com"
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
                <input type="checkbox" name="" id="" /> Remember me
              </label>
            </div>
            <div className="forgot-password">Forgot your password?</div>
          </div>
          <button className="login-btn">Login</button>
          <a className="create-new-acc" href="/#">
            Create new account
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

export default LoginPage;
