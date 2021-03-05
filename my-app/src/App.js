import "./App.css";
import Navbar from "../src/components/Navbar";
import React, { useState, useEffect } from "react";
import { getData } from "./api/location";
import Day from "./components/Day";
function App() {
	const cities = ["Belfast", "Dublin", "Edinburgh", "London"];
	const [selectCity, setSelectCity] = useState("");
	const [data, setData] = useState([]);

	const handleChange = (value) => {
		setSelectCity(value);
	};
	const handleSubmit = async () => {
		const response = await getData(selectCity);
		setData(response);
		//	console.log("Handle Submit called" + data);
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
				<input
					className="is-primary is-normal is-rounded"
					type="date"
					id="start"
					name="trip-start"
					value="2021-02-07"
					min="2021-02-01"
					max="2021-02-07"
				/>
				<input
					type="date"
					id="start"
					name="trip-start"
					value="2018-07-22"
					min="2021-02-07"
					max="2021-02-07"
				/>

				<button
					className="button is-rounded is-primary btnContainer"
					onClick={handleSubmit}>
					Submit
				</button>
				<div>
					{data.data
						? data.data.map((date) => {
								return <Day date={date} />;
						  })
						: "Please enter a city"}
				</div>
			</div>
		</div>
	);
}

export default App;
