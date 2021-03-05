import client from "./client";

const endpoint = "/api/location/london";

export const getData = async (location) => {
	const response = await client.get(location.toLowerCase());
	console.log(response.ok);
	//console.log(response.data);
	return response.data;
};
