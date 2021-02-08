import React from "react";
import "./index.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Cincinnati" />
      <a href="https://github.com/stephaniewillhide/react-weather">Open source code by Steph</a>
    </div>
  );
}
