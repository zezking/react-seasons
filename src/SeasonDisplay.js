import React from "react";
import "./seasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "it's summer, hot hot summer",
    iconName: "sun",
  },
  winter: {
    text: "It's winter so coooold",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
