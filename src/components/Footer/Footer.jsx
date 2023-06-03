import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="footer-content">
        <div className="page-links-cont">
          <div>About</div>
          <div>Help</div>
          <div>Policy</div>
        </div>
        <div className="copy-cont">
          <div>
            <span>All In One Shop</span> <FontAwesomeIcon icon={faCopyright} />{" "}
            2023
          </div>
          <div>made by Karthik Goud</div>
        </div>
        <div className="footer-icons-cont">
          <a href="https://github.com/karthikgoud/my-ecom-app" target="_blank">
            <div className="icons">
              <img src="/images/icons8-github.svg" alt="github" />
            </div>
          </a>

          <a href="https://twitter.com/karthikgoudrv" target="_blank">
            <div className="icons">
              <img src="/images/icons8-twitter.svg" alt="twitter" />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/karthikgoudrv/" target="_blank">
            <div className="icons">
              <img src="/images/icons8-linkedin.svg" alt="linkedin" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
