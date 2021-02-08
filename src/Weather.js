import React, { useState } from "react";
import FormattedDate from "./FormattedDate"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData ] = useState({ ready: false });

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			city: response.data.name,
			date: new Date(response.data.dt * 1000),
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
			description: response.data.weather[0].description,
		});
	};

	if (weatherData.ready) {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-10">
						<div className="card p-4 m-4">
							<div className="row">
								<div className="col-8">
									<h1>{weatherData.city}</h1>
									<ul>
										<li>
											<FormattedDate date={weatherData.date} />
										</li>
										<li className="text-capitalize">{weatherData.description}</li>
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
										<li>Humidity: {weatherData.humidity}%</li>
										<li>Wind: {weatherData.wind}</li>
									</ul>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<h1 className="d-inline">{Math.round(weatherData.temperature)}</h1>
									<img className="img-50" src={weatherData.iconUrl} alt={weatherData.description} />
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
			</div>
		);
	} else {
			const apiKey = "ed136b54c46892c2f08167afd8eae8a3";
			let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
			axios.get(apiUrl).then(handleResponse);		
			return "loading...";
	}
}