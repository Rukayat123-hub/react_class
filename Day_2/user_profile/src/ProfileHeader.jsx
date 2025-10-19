// src/Components/ProfileHeader.jsx
import React from "react";

const ProfileHeader = ({ name, title, avatar }) => {
  const headerStyle = {
    textAlign: "center",
  };

  const avatarStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  return (
    <div style={headerStyle}>
      <img src={avatar} alt={name} style={avatarStyle} />
      <h2 style={{ margin: "10px 0 5px" }}>{name}</h2>
      <p style={{ color: "#555" }}>{title}</p>
    </div>
  );
};

export default ProfileHeader;
