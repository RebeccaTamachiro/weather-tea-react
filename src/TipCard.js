import React, { useState } from "react";
import "./TipCard.css";

export default function TipCard(props) {
  const [teaFlavour, setTeaFlavour] = useState("black tea");
  const [temperatureTracker, setTemperatureTracker] = useState(null);

  let coldWeatherTeas = [
    "spiced apple tea",
    "lemon ginger tea",
    "chai latte",
    "raspberry tea",
    "ginger turmeric tea",
    "spiced orange tea",
  ];

  let neutralWeatherTeas = [
    "chamomile tea",
    "lemon-verbena tea",
    "peppermint tea",
    "lemongrass tea",
    "golden milk latte",
    "rose milk tea",
  ];

  let hotWeatherTeas = [
    "iced matcha latte",
    "honeydew bubble tea",
    "lemon iced tea",
    "iced chai latte",
    "green tea",
    "peach iced tea",
  ];

  function chooseFlavour() {
    if (props.temperature < 10) {
      setTeaFlavour(
        coldWeatherTeas[Math.floor(Math.random() * coldWeatherTeas.length)]
      );
    }

    if (props.temperature >= 10 && props.temperature <= 20) {
      setTeaFlavour(
        neutralWeatherTeas[
          Math.floor(Math.random() * neutralWeatherTeas.length)
        ]
      );
    }
    if (props.temperature > 20) {
      setTeaFlavour(
        hotWeatherTeas[Math.floor(Math.random() * hotWeatherTeas.length)]
      );
    }
    setTemperatureTracker(props.temperature);
  }

  if (temperatureTracker === props.temperature) {
    return (
      <div className="TipCard">
        <div className="card-body bg-light mb-2 teaTip">
          <p className="card-text">
            A great weather to have some nice{" "}
            <span className="teaFlavour">{teaFlavour}</span> OR...
          </p>
        </div>
      </div>
    );
  } else {
    chooseFlavour();
    return (
      <div className="card-body bg-light mb-2 teaTip">
        <p className="card-text">Loading...</p>
      </div>
    );
  }
}
