import client from "./client";

export const auth = async (key) => {
	client.setHeaders({ token: key });
	const response = await client.post("/auth");
	console.log(response.ok);
	console.log(response.data);
	return response.data;
};
