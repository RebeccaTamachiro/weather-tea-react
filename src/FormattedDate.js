import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dez",
  ];

  let month = monthName[props.date.getMonth()];

  let day = props.date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormattedDate">
      <p className="my-0 secondaryInfo">
        Last updated:
        <span>
          {" "}
          {month} {day}
        </span>
        ,{" "}
        <span>
          {hours}:{minutes}
        </span>
      </p>
    </div>
  );
}
