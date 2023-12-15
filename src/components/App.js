
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
      <p style={temperatureStyle}>{weatherInput.temperature}°C</p>
      <p style={temperatureStyle}>{weatherInput.conditions}</p>
    </div>
  )
}

export default App
