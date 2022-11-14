import React from "react";
import "./index.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Cincinnati" />
      <div className="container">
        <div className="row justify-content-center">
					<div className="col-12 col-lg-10">
            <a href="https://github.com/stephaniewillhide/react-weather" class="pl-5">GitHub Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
}
