// src/Components/ProfileCard.jsx
import React from "react";

const ProfileCard = ({ children }) => {
  const cardStyle = {
    width: "350px",
    margin: "50px auto",
    padding: "25px",
    borderRadius: "16px",
    backgroundColor: "white",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default ProfileCard;
