import React, { useState } from "react";
import "./TipCard.css";

export default function TipCard(props) {
  const [teaFlavour, setTeaFlavour] = useState("black tea");
  const [sentenceStarter, setSentenceStarter] = useState(
    "A great weather to have some nice"
  );
  const [temperatureTracker, setTemperatureTracker] = useState(null);

  let winterSentenceStarters = [
    "Enjoy colder days with some",
    "Get yourself a blanket and some",
    "Why not warm yourself up with some",
  ];

  let generalSentenceStarters = [
    "It's always a good weather for some",
    "A great weather to have some nice",
    "Why not vary a little with some",
  ];

  let summerSentenceStarters = [
    "Why not try some refreshing",
    "Refresh yourself and go healthy with some",
    "Great weather to enjoy some tasty",
  ];

  let coldWeatherTeas = [
    "spiced apple tea",
    "lemon ginger tea",
    "hot chai latte",
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
    "peach iced tea",
  ];

  function matchSentenceStarter() {
    if (props.temperature < 10) {
      setSentenceStarter(
        winterSentenceStarters[
          Math.floor(Math.random() * winterSentenceStarters.length)
        ]
      );
    }
    if (props.temperature >= 10 && props.temperature <= 20) {
      setSentenceStarter(
        generalSentenceStarters[
          Math.floor(Math.random() * generalSentenceStarters.length)
        ]
      );
    }
    if (props.temperature > 20) {
      setSentenceStarter(
        summerSentenceStarters[
          Math.floor(Math.random() * summerSentenceStarters.length)
        ]
      );
    }
  }

  function matchTeaFlavour() {
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
    matchSentenceStarter();
    setTemperatureTracker(props.temperature);
  }

  if (temperatureTracker === props.temperature) {
    return (
      <div className="TipCard">
        <div className="card-body bg-light mb-2">
          <p className="card-text">
            {" "}
            <span role="img" aria-label="pointer">
              👉{" "}
            </span>
            {sentenceStarter} <span className="teaFlavour">{teaFlavour}</span>{" "}
            OR...
          </p>
        </div>
      </div>
    );
  } else {
    matchTeaFlavour();
    return (
      <div className="card-body bg-light mb-2 teaTip">
        <p className="card-text">Loading...</p>
      </div>
    );
  }
}
