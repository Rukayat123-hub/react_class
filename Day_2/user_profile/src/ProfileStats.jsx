// src/Components/ProfileStats.jsx
import React from "react";

const ProfileStats = ({ projects, followers, following }) => {
  const statContainer = {
    display: "flex",
    justifyContent: "space-around",
    margin: "20px 0",
    cursor: "pointer",
  };

  const statStyle = {
    padding: "10px 15px",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    transition: "background-color 0.3s",
  };

  const hoverEffect = (e) => {
    e.target.style.backgroundColor = "#007BFF";
    e.target.style.color = "white";
  };

  const removeHover = (e) => {
    e.target.style.backgroundColor = "#f0f0f0";
    e.target.style.color = "black";
  };

  return (
    <div style={statContainer}>
      <div
        style={statStyle}
        onMouseEnter={hoverEffect}
        onMouseLeave={removeHover}
      >
        <strong>{projects}</strong> Projects
      </div>
      <div
        style={statStyle}
        onMouseEnter={hoverEffect}
        onMouseLeave={removeHover}
      >
        <strong>{followers}</strong> Followers
      </div>
      <div
        style={statStyle}
        onMouseEnter={hoverEffect}
        onMouseLeave={removeHover}
      >
        <strong>{following}</strong> Following
      </div>
    </div>
  );
};

export default ProfileStats;
