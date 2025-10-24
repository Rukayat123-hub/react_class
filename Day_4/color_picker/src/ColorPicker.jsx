import { useState } from "react";
import RGBSlider from "./RGBSlider";
import ColorDisplay from "./ColorDisplay";

function ColorPicker() {
  const [color, setColor] = useState({ r: 255, g: 100, b: 50 });

  // Update color state
  const handleChange = (key, value) => {
    setColor((prev) => ({ ...prev, [key]: Number(value) }));
  };

  const { r, g, b } = color;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    alert(`✅ Hex code ${hex} copied!`);
  };

  return (
    <div style={container}>
      <h2>🎨 Color Picker</h2>
      <RGBSlider label="Red" value={r} onChange={(v) => handleChange("r", v)} color="red" />
      <RGBSlider label="Green" value={g} onChange={(v) => handleChange("g", v)} color="green" />
      <RGBSlider label="Blue" value={b} onChange={(v) => handleChange("b", v)} color="blue" />

      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        <strong>RGB:</strong> ({r}, {g}, {b})
      </p>
      <p style={{ fontSize: "18px" }}>
        <strong>HEX:</strong> {hex}
      </p>

      <ColorDisplay color={`rgb(${r}, ${g}, ${b})`} />

      <button onClick={copyToClipboard} style={buttonStyle}>
        📋 Copy Hex
      </button>
    </div>
  );
}

const container = {
  textAlign: "center",
  marginTop: "40px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#f0f0f0",
  width: "350px",
  margin: "auto",
};

const buttonStyle = {
  padding: "10px 20px",
  marginTop: "15px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default ColorPicker;
