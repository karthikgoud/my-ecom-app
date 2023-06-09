import "./LoginPage.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn, getLogin, user } = useAuth();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoginForm((prev) => ({
      ...prev,
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    }));
  }, []);

  const handleLogin = () => {
    getLogin(loginForm.email, loginForm.password);

    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };

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
              placeholder="test@gmail.com"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="input-password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="*********"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, password: e.target.value }))
              }
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
          <button className="login-btn" onClick={handleLogin}>
            {isLoggedIn ? "Logout" : "Login as Guest"}
          </button>
          <a className="create-new-acc" href="/signup">
            New member? Create an account
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
