import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather () {
	
	const [ready, setReady] = useState(false);
	const [temperature, setTemperature ] = useState(null);

	function handleResponse(response) {
		console.log(response.data);
		setTemperature(response.data.main.temp);
		setReady(true);
	};

	if (ready) {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-10">
						<div className="card p-4 m-4">
							<div className="row">
								<div className="col-8">
									<h1>Cincinnati</h1>
									<ul>
										<li>Sunday 18:16</li>
										<li>Light Rain</li>
									</ul>
								</div>
								<div className="col-4">
									<form>
										<input
											type="text"
											placeholder="Enter a city"
										/>
										<input type="submit" value="Search" className="btn btn-primary mt-3 d-block" />
									</form>
									<ul>
										<li>Precipitation: 0%</li>
										<li>Humidity: 21%</li>
										<li>Wind: 12mph</li>
									</ul>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<h1>{temperature}</h1>
								</div>
							</div>
							<div className="row pt-4">
								<div className="col-4 col-sm-2 text-center pb-3">
									<h3 className="h5">
										20:00
									</h3>
									<img className="img-50" src="http://openweathermap.org/img/wn/10n@2x.png" alt="Icon" />
									<h6>36°</h6>
								</div>
								<div className="col-4 col-sm-2 text-center pb-3">
									<h3 className="h5">
										20:00
									</h3>
									<img className="img-50" src="http://openweathermap.org/img/wn/10n@2x.png" alt="Icon" />
									<h6>32°</h6>
								</div>
								<div className="col-4 col-sm-2 text-center pb-3">
									<h3 className="h5">
										22:00
									</h3>
									<img className="img-50" src="http://openweathermap.org/img/wn/10n@2x.png" alt="Icon" />
									<h6>31°</h6>
								</div>
								<div className="col-4 col-sm-2 text-center pb-3">
									<h3 className="h5">
										24:00
									</h3>
									<img className="img-50" src="http://openweathermap.org/img/wn/10n@2x.png" alt="Icon" />
									<h6>28°</h6>
								</div>
								<div className="col-4 col-sm-2 text-center pb-3">
									<h3 className="h5">
										2:00
									</h3>
									<img className="img-50" src="http://openweathermap.org/img/wn/10n@2x.png" alt="Icon" />
									<h6>28°</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a href="https://github.com/stephaniewillhide/react-weather">Open source code by Steph</a>
			</div>
		);
	} else {
			const apiKey = "ed136b54c46892c2f08167afd8eae8a3";
			let city = "Cincinnati";
			let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
			axios.get(apiUrl).then(handleResponse);		
			return "loading...";
	}
}