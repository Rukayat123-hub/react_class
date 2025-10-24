function ColorDisplay({ color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
        margin: "20px auto",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      }}
    ></div>
  );
}

export default ColorDisplay;
