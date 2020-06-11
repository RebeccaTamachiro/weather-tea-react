import React, { useState } from "react";
import axios from "axios";
import ForecastCard from "./ForecastCard";

import "./Forecast.css";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleForecastResponse(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && forecast.city.name === props.city) {
    return (
      <div className="Forecast row">
        <ForecastCard data={forecast.list[0]} />
        <ForecastCard data={forecast.list[1]} />
        <ForecastCard data={forecast.list[2]} />
        <ForecastCard data={forecast.list[3]} />
        <ForecastCard data={forecast.list[4]} />
      </div>
    );
  } else {
    const apiKey = "461572920dce0becb1819d70275340e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
