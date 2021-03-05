import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Temperature from "../src/components/Temperature";
import "./data.json";
import {
	faTemperatureHigh,
	faTemperatureLow,
	faCity,
	faGrinBeamSweat,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function App() {
	const [location, setLocation] = useState("");
	const [cityName, setCityName] = useState("");
	const [data, setData] = useState([]);
	const successMsg = "You've successfully integrated with the backend!";
	const error = "Unable to connect to the backend.";
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		axios.get("http://localhost:5000/test").then((response) => {
			setData(response.data);
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(location);
		setCityName(location);
	};
	return <div className="App">{data.length > 1 ? successMsg : error}</div>;
}

export default App;
