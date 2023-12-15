
import React from "react";
import './../styles/App.css';

const App = () => {

  const weatherInput = { temperature: 25, conditions: "Sunny" };
  const temperatureThreshold = 20;

  const isTempHigh = weatherInput.temperature > temperatureThreshold;

  const temperatureStyle = {
    color: isTempHigh ? 'red' : 'blue'
  }
  return (
    <div>
      <h1>Weather Report</h1>
      <p>Temperature: <span style={temperatureStyle}>{weatherInput.temperature}°C</span></p>
      <p>Conditions: <span style={temperatureStyle}>{weatherInput.conditions}</span></p>
    </div>
  )
}

export default App
