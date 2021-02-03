import "./App.css";
import Navbar from "../src/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTemperatureHigh,
	faTemperatureLow,
	faCity,
	faClock,
} from "@fortawesome/free-solid-svg-icons";

function App() {
	return (
		<div className="App">
			<Navbar />

			<div className="search-bar">Search bar</div>

			<div className="container">
				<div className="box location">
					<FontAwesomeIcon icon={faCity} size="3x" />
					<div className="location-text">London</div>
				</div>
				<div className="box location">
					{" "}
					<FontAwesomeIcon icon={faTemperatureHigh} size="3x" />
					High Temperature
				</div>
				<div className="box location">
					{" "}
					<FontAwesomeIcon icon={faTemperatureLow} size="3x" />
					Low Temperature
				</div>
				<div className="box location">Humidity</div>
			</div>
			<div className="daily-temp">
				<div className="daily-temp-row">
					<div>
						{" "}
						<FontAwesomeIcon icon={faClock} size="xl" /> 6AM
					</div>
					<div>Temperature</div>
					<div>Humidity</div>
				</div>
				<div className="daily-temp-row box">
					<div>
						<FontAwesomeIcon icon={faClock} size="xl" /> 12AM
					</div>
					<div>Temperature: 24C</div>
					<div>Humidity</div>
				</div>
				<div className="daily-temp-row">
					<div>
						{" "}
						<FontAwesomeIcon icon={faClock} size="xl" /> 18PM
					</div>
					<div>Temperature</div>
					<div>Humidity</div>
				</div>
				<div className="daily-temp-row">
					<div>
						<FontAwesomeIcon icon={faClock} size="xl" /> 00AM
					</div>
					<div>Temperature</div>
					<div>Humidity</div>
				</div>
			</div>
		</div>
	);
}

export default App;
