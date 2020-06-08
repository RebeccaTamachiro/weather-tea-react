import React from "react";

export default function WeatherIcon(props) {
  const iconCodeMapping = {
    "01d": "fas fa-sun",
    "01n": "fas fa-moon",
    "02d": "fas fa-cloud",
    "02n": "fas fa-cloud",
    "03d": "fas fa-cloud",
    "03n": "fas fa-cloud",
    "04n": "fas fa-cloud",
    "04d": "fas fa-cloud",
    "09d": "fas fa-cloud-showers-heavy",
    "09n": "fas fa-cloud-showers-heavy",
    "10d": "fas fa-cloud-showers-heavy",
    "10n": "fas fa-cloud-showers-heavy",
    "11d": "fas fa-cloud-showers-heavy",
    "11n": "fas fa-cloud-showers-heavy",
    "13d": "fas fa-snowflake",
    "13n": "fas fa-snowflake",
    "50d": "fas fa-smog",
    "50n": "fas fa-smog",
  };

  return (
    <div className="WeatherIcon">
      <i className={iconCodeMapping[props.iconCode]} />
    </div>
  );
}
