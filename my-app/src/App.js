import "./App.css";
import Navbar from "../src/components/Navbar";
import React, { useState } from "react";
import { getData } from "./api/location";
import { auth } from "./api/auth";
import Day from "./components/Day";
function App() {
	const cities = ["Belfast", "Dublin", "Edinburgh", "London"];
	const [selectCity, setSelectCity] = useState("Belfast");
	const [data, setData] = useState([]);
	const [startDate, setStartDate] = useState("2021-01-01");
	const [endDate, setEndDate] = useState("2021-01-07");
	const [authToken, setAuthToken] = useState("");
	const [authData, setAuthData] = useState(
		"Enter a token to authenticate yourself."
	);
	const handleChange = (value) => {
		setSelectCity(value);
	};
	const handleSubmit = async () => {
		const response = await getData(startDate, endDate, selectCity);
		setData(response);
	};

	const handleAuthSubmit = async () => {
		const response = await auth(authToken);
		setAuthData(response);
	};

	return (
		<div className="App">
			<Navbar />

			<div className="selectBoxContainer">
				<input
					className="input is-primary is-medium is-rounded"
					placeholder="Authentication token"
					type="text"
					id="auth"
					name="auth"
					value={authToken}
					onChange={(e) => setAuthToken(e.target.value)}
				/>
				<button
					className="button is-rounded is-primary btnContainer"
					onClick={handleAuthSubmit}>
					Authenticate!
				</button>
			</div>
			<div>{authData}</div>
			<div className="selectBoxContainer">
				<div
					className="select is-normal is-rounded is-primary"
					id="selectBox">
					<select
						onChange={(e) => handleChange(e.target.value)}
						value={selectCity}>
						{cities.map((city, index) => {
							return <option key={index}>{city}</option>;
						})}
					</select>
				</div>
				<div className="date-fields">
					<input
						className="is-primary is-normal is-rounded"
						type="date"
						id="start"
						name="start"
						value={startDate}
						onChange={(e) => setStartDate(e.target.value)}
						min="2021-01-01"
						max="2021-01-07"
					/>
				</div>
				<div className="date-fields">
					<input
						type="date"
						id="start"
						name="end"
						value={endDate}
						onChange={(e) => setEndDate(e.target.value)}
						min="2021-01-01"
						max="2021-01-07"
					/>
				</div>
				<div>
					<button
						className="button is-rounded is-primary btnContainer"
						onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
			<div>
				{data?.length > 0 && typeof data !== "string" ? (
					data.map((date) => {
						return <Day date={date} />;
					})
				) : (
					<>
						{typeof data === "string"
							? "Data not available in the backend"
							: "Please enter a city"}
					</>
				)}
			</div>
		</div>
	);
}

export default App;
