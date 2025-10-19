// src/Components/SkillBadge.jsx
import React from "react";

const SkillBadge = ({ skill, level }) => {
  const getColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "gray";
      case "intermediate":
        return "#4169E1"; // blue
      case "expert":
        return "#008751"; // green
      default:
        return "black";
    }
  };

  const badgeStyle = {
    backgroundColor: getColor(level),
    color: "white",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    margin: "5px",
    display: "inline-block",
  };

  return (
    <span style={badgeStyle}>
      {skill} - {level}
    </span>
  );
};

export default SkillBadge;
