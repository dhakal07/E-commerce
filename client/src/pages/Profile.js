import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-page">
      <h2>Welcome to Your Profile</h2>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;