import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users/me", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Role:</strong> {userData.role}</p>
    </div>
  );
};

export default Profile;
