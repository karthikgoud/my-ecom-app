import { NavLink } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = ({ user, handleLogout, isLoggedIn }) => {
  return (
    <div className="profile-cont">
      <div className="profile-card">
        <div className="card-inside">
          <div className="profile-heading">Profile Details</div>
          <div className="profile-details-main">
            <div className="profile-details-title">
              <p>Fullname</p>
              <p>Email</p>
            </div>
            <div className="">
              <p>{`${user?.firstName} ${user?.lastName}`}</p>
              <p>{user?.email}</p>
            </div>
          </div>
          <div>
            {isLoggedIn && (
              <NavLink to="/">
                <button className="profile-logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
