import { create } from "apisauce";

const apiClient = create({
	baseURL: "http://localhost:5000/api/loc/",
});

export default apiClient;
