import "./UserProfile.css";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header/Header";
import ProfileCard from "../../components/UserProfile/ProfileCard/ProfileCard";
import AddressForm from "../../components/UserProfile/AddressForm/AddressForm";

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
