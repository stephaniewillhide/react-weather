import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast"
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
			iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			description: response.data.weather[0].description,
		});
	};

	function search() {
		const apiKey = "ed136b54c46892c2f08167afd8eae8a3";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
							<form onSubmit={handleSubmit}>
								<div className="row pb-4">
									<div className="col-12 col-sm-9">
										<input
											type="search"
											placeholder="Enter a city"
											className="form-control"
											autoFocus="on"
											onChange={handleCityChange}
										/>
									</div>
									<div className="col-12 col-sm-3">
										<input
											type="submit"
											value="Search"
											className="btn btn-teal w-100"
										/>
									</div>
								</div>
							</form>
							<WeatherInfo data={weatherData} />
							<WeatherForecast city={weatherData.city} />
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