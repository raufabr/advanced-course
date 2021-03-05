import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import "./Day.css";
export default function Day({ date }) {
	return (
		<div className="container box">
			{console.log(date)}

			<h1>
				Date:
				{" " + date.date.slice(0, 10)}
			</h1>
			<div>
				Humidity:
				{" " + date.Humidity}
			</div>
			<div>
				High Temperature:
				{" " + date.temperatureHigh}
			</div>
			<div>
				Low Temperature:
				{" " + date.temperatureLow}
			</div>
		</div>
	);
}
