import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData ] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
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

	function search() {
		const apiKey = "ed136b54c46892c2f08167afd8eae8a3";
		let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);		

	}

	function handleSubmit(event) {
		event.preventDefault();
		search(city);
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-10">
						<div className="card p-4 m-4">
							<div className="row">
								<div className="col-12">
									<form onSubmit={handleSubmit}>
										<input
											type="text"
											placeholder="Enter a city"
											onChange={handleCityChange}
										/>
										<input type="submit" value="Search" className="btn btn-primary mt-3 d-block" />
									</form>
								</div>
							</div>
							<WeatherInfo data={weatherData} />
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
		search();
		return "loading...";
	}
}