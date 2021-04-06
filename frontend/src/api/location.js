import client from "./client";

const formatDate = (date) => {
	const newDate = date.split("-");
	return newDate[0] + "-" + newDate[2] + "-" + newDate[1];
};

export const getData = async (dateFrom, dateTo, location) => {
	const formattedDateTo = formatDate(dateTo);
	const formattedDateFrom = formatDate(dateFrom);

	const response = await client.get(
		"date/" +
			formattedDateFrom +
			"/" +
			formattedDateTo +
			"/loc/" +
			location.toLowerCase()
	);
	console.log(response.ok);
	console.log(response.data);
	if (!response.ok) return "Unable to find any data";

	return response.data;
};
