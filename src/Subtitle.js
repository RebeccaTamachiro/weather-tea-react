import React from "react";
import axios from "axios";

export default function Subtitle(props) {
  let apiKey = "461572920dce0becb1819d70275340e2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    alert(
      `The temperature in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}ºC`
    );
  }

  axios.get(apiUrl).then(handleResponse);

  return <h2>Testing React App ({props.city})</h2>;
}
