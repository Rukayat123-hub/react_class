function FahrenheitInput({ fahrenheit, onFahrenheitChange }) {
  return (
    <div style={{ margin: "10px" }}>
      <label style={{ marginRight: "10px" }}>Fahrenheit:</label>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(e.target.value)}
        style={inputStyle}
        placeholder="Enter °F"
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
//FahrenheitInpu child component
export default FahrenheitInput;
