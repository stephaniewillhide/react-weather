import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="row">
				<div className="col-12 col-sm-8">
					<h1>{props.data.city}</h1>
					<ul>
						<li>
							<FormattedDate date={props.data.date} />
						</li>
						<li className="text-capitalize">{props.data.description}</li>
					</ul>
				</div>
				<div className="col-12 col-sm-4">
					<ul>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind}</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<WeatherTemperature celsius={props.data.temperature} />
					<img className="width-100" src={props.data.iconUrl} alt={props.data.description} />
				</div>
			</div>
		</div>
	);
}