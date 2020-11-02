import React from "react";
import "../css/SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "nice and warm! Let's hit the beach!",
    icon: "sun",
  },
  winter: {
    text: "chilly, burr! Go grab a jumper and a blanket!",
    icon: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <section className={`${season} season-display`}>
      <i className={`${icon} massive icon-left icon`} />
      <h1>It's {text}</h1>
      <i className={`${icon} massive icon-right icon`} />
    </section>
  );
};
