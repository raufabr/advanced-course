import { create } from "apisauce";
import axios from "axios";

const getData = () => {
	axios.get("http://localhost:5000/test").then((response) => {
		console.log(response.data);
	});
};

export { getData };
