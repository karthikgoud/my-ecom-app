import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";
// import "./SignUpPage.css";
import "./LoginPage.css";

const SignUpPage = () => {
  return (
    <div>
      <Header />
      <div className="login-cont">
        <div className="login-card">
          <h2>SignUp</h2>
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
                <input type="checkbox" name="" id="" /> I accept all Terms and
                Conditions
              </label>
            </div>
          </div>
          <button className="login-btn">Create New Account</button>
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
