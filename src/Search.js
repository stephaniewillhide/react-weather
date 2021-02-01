import React from "react";
import "./Search.css";

export default function Search () {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="card p-4 m-4">
						<div className="row">
							<div className="col-8">
								<h1>Cincinnati</h1>
								<h3>Sunday 18:16</h3>
								<h3>Light Rain</h3>
							</div>
							<div className="col-4">
								<form>
									<input
										type="text"
										placeholder="Enter a city"
									/>
									<input type="submit" value="Search" className="btn btn-primary mt-3" />
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h1>34°</h1>
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
	)
}