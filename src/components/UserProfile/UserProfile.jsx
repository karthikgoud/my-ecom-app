import Header from "../Header/Header";
import "./UserProfile.css";
import { useAuth } from "../../context/AuthContext";
import ProfileCard from "./ProfileCard/ProfileCard";
import AddressForm from "./AddressForm/AddressForm";

const UserProfile = () => {
  const { isLoggedIn, setIsLoggedIn, setIsSignUp, user } = useAuth();

  function handleLogout() {
    setIsLoggedIn(false);
    setIsSignUp(false);
  }

  return (
    <div>
      <Header />
      <div className="user-profile-cont">
        <ProfileCard
          user={user}
          handleLogout={handleLogout}
          isLoggedIn={isLoggedIn}
        />
        <AddressForm />
      </div>
    </div>
  );
};

export default UserProfile;
