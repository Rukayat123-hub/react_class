import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";
//TempertureApp is the parent component
function TemperatureApp() {
  const [temperature, setTemperature] = useState({ value: "", scale: "C" });

  // Convert Celsius to Fahrenheit
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  // Convert Fahrenheit to Celsius
  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  // Handle input changes
  const handleCelsiusChange = (value) => {
    setTemperature({ value, scale: "C" });
  };

  const handleFahrenheitChange = (value) => {
    setTemperature({ value, scale: "F" });
  };

  const { value, scale } = temperature;

  // Keep both inputs in sync
  const celsius =
    scale === "F" ? (value === "" ? "" : toCelsius(parseFloat(value))) : value;
  const fahrenheit =
    scale === "C" ? (value === "" ? "" : toFahrenheit(parseFloat(value))) : value;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🌇 Temperature Converter</h2>
      <CelsiusInput celsius={celsius} onCelsiusChange={handleCelsiusChange} />
      <FahrenheitInput
        fahrenheit={fahrenheit}
        onFahrenheitChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default TemperatureApp;
