function CelsiusInput({ celsius, onCelsiusChange }) {
  return (
    <div style={{ margin: "10px" }}>
      <label style={{ marginRight: "10px" }}>Celsius:</label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => onCelsiusChange(e.target.value)}
        style={inputStyle}
        placeholder="Enter °C"
      />
    </div>
  );
}

const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "120px",
  textAlign: "center",
};
//Celsius IS CHILD COMPONENT
export default CelsiusInput;
