// src/Components/StateCard.jsx
import React from "react";

const StateCard = ({ state, capital, region, population, children }) => {
  // Set background color based on region
  const getBackgroundColor = (region) => {
    switch (region.toLowerCase()) {
      case "north":
        return "#8B4513"; // brown
      case "south":
        return "#008751"; // green
      case "east":
        return "#FFD700"; // gold
      case "west":
        return "#4169E1"; // royal blue
      default:
        return "#ccc";
    }
  };

  const cardStyle = {
    backgroundColor: getBackgroundColor(region),
    color: "white",
    padding: "16px",
    borderRadius: "12px",
    width: "250px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  return (
    <div style={cardStyle}>
      <h2>{state}</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population}</p>
      {children && (
        <div style={{ marginTop: "10px", fontStyle: "italic" }}>
          <strong>Landmark:</strong> {children}
        </div>
      )}
    </div>
  );
};

export default StateCard;
