import React from "react";

function GreetingCard({ name, message }) {
  const cardStyle = {
    background: "linear-gradient(135deg, #00ff99, #66ccff, #001f4d)", // green → light blue → deep blue
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "250px",
    margin: "10px auto",
    color: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}

export default GreetingCard;
