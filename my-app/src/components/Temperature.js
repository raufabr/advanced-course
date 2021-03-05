import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTemperatureHigh,
	faTemperatureLow,
	faCity,
	faClock,
	faGrinBeamSweat,
} from "@fortawesome/free-solid-svg-icons";

export default function Temeperature() {
	return (
		<div className="daily-temp">
			<div className="daily-temp-row box">
				<div>
					<FontAwesomeIcon icon={faClock} size="xl" /> 6AM
				</div>
				<div>Temperature : 24C</div>
				<div>Humidity:80</div>
			</div>
			<div className="daily-temp-row box">
				<div>
					<FontAwesomeIcon icon={faClock} size="xl" /> 12AM
				</div>
				<div>Temperature: 24C</div>
				<div>Humidity: 54</div>
			</div>
			<div className="daily-temp-row box">
				<div>
					<FontAwesomeIcon icon={faClock} size="xl" /> 18PM
				</div>
				<div>Temperature:23C</div>
				<div>Humidity: 75</div>
			</div>
			<div className="daily-temp-row">
				<div>
					<FontAwesomeIcon icon={faClock} size="xl" /> 00AM
				</div>
				<div>Temperature: 22C</div>
				<div>Humidity: 85</div>
			</div>
		</div>
	);
}
