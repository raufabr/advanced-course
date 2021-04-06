import "./App.css";
import Navbar from "../src/components/Navbar";
import React, { useState } from "react";
import { getData } from "./api/location";
import Day from "./components/Day";
function App() {
	const cities = ["Belfast", "Dublin", "Edinburgh", "London"];
	const [selectCity, setSelectCity] = useState("Belfast");
	const [data, setData] = useState([]);
	const [startDate, setStartDate] = useState("2021-02-01");
	const [endDate, setEndDate] = useState("2021-02-07");

	const handleChange = (value) => {
		setSelectCity(value);
	};
	const handleSubmit = async () => {
		const response = await getData(startDate, endDate, selectCity);
		setData(response);
	};
	return (
		<div className="App">
			<Navbar />
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
				{data?.length > 0
					? data.map((date) => {
							return <Day date={date} />;
					  })
					: "Please enter a city"}
			</div>
		</div>
	);
}

export default App;
